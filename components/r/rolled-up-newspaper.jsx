import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lecrvlc3a.css';
import '../../css/g/gps3e8x6c.css';
import '../../css/t/tkq-rdi2u.css';
import '../../css/y/ymhfxpb1p.css';
import '../../css/a/al1a3mbpc.css';
import '../../css/u/u677-4w-p.css';
import '../../css/r/ryngs8b0f.css';
import '../../css/y/ygxza1bdo.css';
import '../../css/w/wycjhibbk.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGkRCCwb7V)"><path class="lecrvlc3a"/><path class="gps3e8x6c"/><path class="tkq-rdi2u"/><path class="ymhfxpb1p"/><path class="al1a3mbpc"/><path class="u677-4w-p"/><path class="ryngs8b0f"/><path class="ygxza1bdo"/></g><defs><clipPath id="SVGkRCCwb7V"><path class="wycjhibbk"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:rolled-up-newspaper"} {...others} />);
}

export default Component;
