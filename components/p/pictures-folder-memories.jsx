import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ef7iwcbpf.css';
import '../../css/l/lbrybubwc.css';
import '../../css/r/rk3p1hbqe.css';
import '../../css/b/b6j-vgd2j.css';
import '../../css/z/zkponhbbg.css';
import '../../css/w/wcnzo0buk.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="ef7iwcbpf"/><path class="lbrybubwc"/><path class="rk3p1hbqe"/><path clip-rule="evenodd" class="b6j-vgd2j"/><path class="zkponhbbg"/><path class="wcnzo0buk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:pictures-folder-memories"} {...others} />);
}

export default Component;
