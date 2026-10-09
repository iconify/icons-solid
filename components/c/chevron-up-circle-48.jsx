import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hac57wbhi.css';
import '../../css/p/pqtnzbb9g.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hac57wbhi"/><path class="pqtnzbb9g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chevron-up-circle-48"} {...others} />);
}

export default Component;
