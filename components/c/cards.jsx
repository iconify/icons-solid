import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pilynhqlu.css';
import '../../css/d/dnbmdfbyc.css';
import '../../css/w/wb2svn6kf.css';
import '../../css/b/btbva7g4m.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="pilynhqlu"/><path class="dnbmdfbyc"/><path class="wb2svn6kf"/><path class="btbva7g4m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:cards"} {...others} />);
}

export default Component;
