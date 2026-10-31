import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/u-bh8f5rk.css';
import '../../css/a/a813udbmo.css';
import '../../css/i/i37gikb1c.css';
import '../../css/e/e7_7rwbnc.css';
import '../../css/d/d-tmc-znr.css';
import '../../css/o/objlv8tzn.css';
import '../../css/r/rv2ptfb5r.css';
import '../../css/v/vyt8_xhco.css';
import '../../css/k/kjq9lbbjr.css';
import '../../css/m/m0uwgibee.css';
import '../../css/w/wyb_w8bup.css';

const viewBox = {"width":100,"height":100};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="u-bh8f5rk"/><path class="a813udbmo"/><path class="i37gikb1c"/><path class="e7_7rwbnc"/><path class="d-tmc-znr"/><path class="objlv8tzn"/><path class="rv2ptfb5r"/><path class="vyt8_xhco"/><path class="kjq9lbbjr"/><path class="m0uwgibee"/><path class="wyb_w8bup"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-memes:sad-pepe-frog-hand-drawn"} {...others} />);
}

export default Component;
