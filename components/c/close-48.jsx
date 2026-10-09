import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gpcpxlb-i.css';
import '../../css/u/uspm4fblj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="gpcpxlb-i"/><path class="uspm4fblj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:close-48"} {...others} />);
}

export default Component;
