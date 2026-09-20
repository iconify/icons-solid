import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/d/du1ckebsm.css';
import '../../css/q/qc2lg0bip.css';
import '../../css/w/wk8bznb-t.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="du1ckebsm"/><path class="qc2lg0bip"/><path class="wk8bznb-t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-arrows-move-right-down-expand-resize-bigger-corner-small-smaller-size-arrow-arrows-big"} {...others} />);
}

export default Component;
