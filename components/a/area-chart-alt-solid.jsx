import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cm-i-ub8o.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="cm-i-ub8o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:area-chart-alt-solid"} {...others} />);
}

export default Component;
