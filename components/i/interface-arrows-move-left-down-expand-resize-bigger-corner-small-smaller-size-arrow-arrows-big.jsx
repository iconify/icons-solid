import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/gs6q4bbkk.css';
import '../../css/z/zfpck9bep.css';
import '../../css/e/eofjldamr.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="gs6q4bbkk"/><path class="zfpck9bep"/><path class="eofjldamr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-arrows-move-left-down-expand-resize-bigger-corner-small-smaller-size-arrow-arrows-big"} {...others} />);
}

export default Component;
