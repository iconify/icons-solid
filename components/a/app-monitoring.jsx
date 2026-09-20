import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i5mxzlskq.css';
import '../../css/j/jgw_zob1f.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="i5mxzlskq"/><path class="jgw_zob1f ouiIcon__fillSecondary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:app-monitoring"} {...others} />);
}

export default Component;
