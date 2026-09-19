import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ono2lmbnf.css';
import '../../css/z/zphoc6n5m.css';
import '../../css/w/wsjjh00ev.css';
import '../../css/r/rsbqj3bbt.css';
import '../../css/l/lgi36gbvn.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ono2lmbnf"/><path clip-rule="evenodd" class="zphoc6n5m"/><path class="wsjjh00ev"/><path class="rsbqj3bbt"/><path class="lgi36gbvn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:book-atlas"} {...others} />);
}

export default Component;
