import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z1pik2bez.css';
import '../../css/s/sm4_besjl.css';
import '../../css/d/d_zjw_mcz.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="z1pik2bez"/><path class="sm4_besjl"/><path class="d_zjw_mcz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:stenciljs"} {...others} />);
}

export default Component;
