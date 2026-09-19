import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z1bbnfl8v.css';
import '../../css/l/l_rrpccbj.css';

const viewBox = {"width":128,"height":128};
const content = `<circle class="z1bbnfl8v"/><path class="l_rrpccbj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:chrome"} {...others} />);
}

export default Component;
