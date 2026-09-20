import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hmogbkc4e.css';
import '../../css/r/rp7u70owm.css';
import '../../css/i/i83kgpb-k.css';
import '../../css/z/z0v5s0bpp.css';
import '../../css/k/kdz4acc8r.css';
import '../../css/u/usozxnbrm.css';
import '../../css/c/cgzc74bdy.css';

const viewBox = {"width":72,"height":72};
const content = `<path clip-rule="evenodd" class="hmogbkc4e"/><circle class="rp7u70owm"/><path class="i83kgpb-k"/><path clip-rule="evenodd" class="z0v5s0bpp"/><g class="kdz4acc8r"><circle class="usozxnbrm"/><path class="cgzc74bdy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:ecosia-browser"} {...others} />);
}

export default Component;
