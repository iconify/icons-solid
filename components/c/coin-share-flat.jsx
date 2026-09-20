import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/enu55ibvg.css';
import '../../css/i/iu5cueb_k.css';
import '../../css/i/ili3slbxi.css';
import '../../css/l/l98i6k70k.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="enu55ibvg"/><path clip-rule="evenodd" class="iu5cueb_k"/><path class="ili3slbxi"/><path clip-rule="evenodd" class="l98i6k70k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:coin-share-flat"} {...others} />);
}

export default Component;
