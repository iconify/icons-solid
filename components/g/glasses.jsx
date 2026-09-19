import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kpx6umtca.css';
import '../../css/i/iol7-wboy.css';
import '../../css/h/hx-ne6b0c.css';
import '../../css/o/ourvjgbzk.css';
import '../../css/l/l4vdwdbyo.css';
import '../../css/j/jc8brab-y.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="kpx6umtca"/><path class="iol7-wboy"/><path class="hx-ne6b0c"/><path clip-rule="evenodd" class="ourvjgbzk"/><path class="l4vdwdbyo"/><path class="jc8brab-y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:glasses"} {...others} />);
}

export default Component;
