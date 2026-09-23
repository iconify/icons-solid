import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/co4mf4bsz.css';
import '../../css/c/c6h3dtb_n.css';
import '../../css/e/ebdla0cma.css';
import '../../css/w/w2k-n7s4b.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGrWZHTbxv" x1="-463.995" x2="651.087" y1="977.027" y2="-138.056" gradientUnits="userSpaceOnUse"><stop offset=".43" class="co4mf4bsz"/><stop offset=".662" class="c6h3dtb_n"/><stop offset=".771" class="ebdla0cma"/></linearGradient><path fill="url(#SVGrWZHTbxv)" class="w2k-n7s4b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:pgsty-silo"} {...others} />);
}

export default Component;
