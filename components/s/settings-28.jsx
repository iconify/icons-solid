import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gyyzexb_r.css';
import '../../css/t/tt8br1bqq.css';
import '../../css/d/dybrcqbqj.css';

const viewBox = {"width":28,"height":28};
const content = `<g class="ft5dv1b6b"><path fill="url(#SVGIZXTVzQH)" class="gyyzexb_r"/><defs><linearGradient id="SVGIZXTVzQH" x1="19.749" x2="6.326" y1="25.071" y2="4.173" gradientUnits="userSpaceOnUse"><stop class="tt8br1bqq"/><stop offset="1" class="dybrcqbqj"/></linearGradient></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-color:settings-28"} {...others} />);
}

export default Component;
