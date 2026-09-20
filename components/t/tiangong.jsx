import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qkeomkbnh.css';
import '../../css/e/epnvafbwy.css';
import '../../css/a/aqhljpb_o.css';
import '../../css/a/a59ht-bqk.css';
import '../../css/j/jjiido17l.css';

const viewBox = {"width":24,"height":24};
const content = `<path fill="url(#SVGotsgfeDB)" class="qkeomkbnh"/><path fill="url(#SVGotsgfeDB)" class="epnvafbwy"/><path fill="url(#SVGotsgfeDB)" class="aqhljpb_o"/><defs><linearGradient id="SVGotsgfeDB" x1="0" x2="23.45" y1="11.5" y2="15.091" gradientUnits="userSpaceOnUse"><stop class="a59ht-bqk"/><stop offset="1" class="jjiido17l"/></linearGradient></defs>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:tiangong"} {...others} />);
}

export default Component;
