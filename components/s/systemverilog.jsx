import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r_g8s2ell.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="r_g8s2ell"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:systemverilog"} {...others} />);
}

export default Component;
