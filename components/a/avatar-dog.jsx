import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/j/j46xuuqfe.css';
import '../../css/i/i30w111xz.css';
import '../../css/q/q-vrul6rc.css';
import '../../css/f/f45vyjb4p.css';
import '../../css/l/lbxltfb3j.css';
import '../../css/u/uoqqbvyum.css';
import '../../css/z/zogi8abto.css';
import '../../css/j/jv8d26bjb.css';
import '../../css/e/ev9jjjbub.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="j46xuuqfe wm-shadow"/><path class="i30w111xz"/><path class="q-vrul6rc"/><path class="f45vyjb4p"/><path class="lbxltfb3j"/><path class="uoqqbvyum"/><path class="zogi8abto"/><path class="jv8d26bjb wm-shine"/><path class="ev9jjjbub wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:avatar-dog"} {...others} />);
}

export default Component;
