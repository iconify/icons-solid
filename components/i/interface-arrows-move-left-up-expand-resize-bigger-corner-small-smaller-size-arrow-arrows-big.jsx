import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/a/asex6cchs.css';
import '../../css/x/xw940abtl.css';
import '../../css/i/i1zyer-my.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="asex6cchs"/><path class="xw940abtl"/><path class="i1zyer-my"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-arrows-move-left-up-expand-resize-bigger-corner-small-smaller-size-arrow-arrows-big"} {...others} />);
}

export default Component;
