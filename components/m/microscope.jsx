import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y_6kj7x5d.css';
import '../../css/t/tfcedsrrx.css';
import '../../css/x/xiuuvjbrv.css';
import '../../css/z/z3pcmeson.css';
import '../../css/o/og2o9yleg.css';
import '../../css/l/llbpgybel.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="y_6kj7x5d"/><path clip-rule="evenodd" class="tfcedsrrx"/><path class="xiuuvjbrv"/><path class="z3pcmeson"/><path class="og2o9yleg"/><path clip-rule="evenodd" class="llbpgybel"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:microscope"} {...others} />);
}

export default Component;
