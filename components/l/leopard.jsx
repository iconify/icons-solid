import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rcroczb8a.css';
import '../../css/w/w_-y8rbic.css';
import '../../css/s/stszo-b8l.css';
import '../../css/q/qtvivvozr.css';
import '../../css/v/vhs681b-h.css';
import '../../css/j/j67a6gb8t.css';
import '../../css/x/x-vem5b2r.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="rcroczb8a"/><path class="w_-y8rbic"/><path class="stszo-b8l"/><g class="qtvivvozr"><path class="vhs681b-h"/><path class="j67a6gb8t"/><path class="x-vem5b2r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:leopard"} {...others} />);
}

export default Component;
