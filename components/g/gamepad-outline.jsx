import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/i/ir4dw3bpl.css';
import '../../css/y/y2orggbby.css';
import '../../css/n/n01fo5_qx.css';
import '../../css/b/bjl-racht.css';
import '../../css/a/axtmyacbi.css';
import '../../css/e/esglpskpa.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="ir4dw3bpl"/><path class="y2orggbby"/><path class="n01fo5_qx"/><path class="bjl-racht"/><path class="axtmyacbi"/><path class="esglpskpa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:gamepad-outline"} {...others} />);
}

export default Component;
