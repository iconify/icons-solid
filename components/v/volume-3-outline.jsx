import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hnlw07bql.css';
import '../../css/g/guv1tkb9d.css';
import '../../css/s/snus54bms.css';
import '../../css/y/y1hneubcx.css';
import '../../css/i/id_if5etk.css';
import '../../css/d/d2i7jx5-i.css';
import '../../css/g/g41ml8beq.css';
import '../../css/e/e-n5-fbyy.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="hnlw07bql"/><path class="guv1tkb9d"/><path class="snus54bms"/><path clip-rule="evenodd" class="y1hneubcx"/><path class="id_if5etk"/><path class="d2i7jx5-i"/><path class="g41ml8beq"/><path clip-rule="evenodd" class="e-n5-fbyy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:volume-3-outline"} {...others} />);
}

export default Component;
