import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gywo5fgks.css';
import '../../css/t/t5sb6zsko.css';
import '../../css/o/ol7cejbxg.css';
import '../../css/b/bxegrmbjp.css';
import '../../css/x/xowgfxbjw.css';
import '../../css/t/tt8br1bqq.css';
import '../../css/d/dybrcqbqj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path fill="url(#SVGCpoElcFt)" class="gywo5fgks"/><path fill="url(#SVGZhI2gb0W)" class="t5sb6zsko"/><defs><linearGradient id="SVGCpoElcFt" x1="9.769" x2="48.823" y1="29" y2="13.27" gradientUnits="userSpaceOnUse"><stop class="ol7cejbxg"/><stop offset=".445" class="bxegrmbjp"/><stop offset=".957" class="xowgfxbjw"/></linearGradient><linearGradient id="SVGZhI2gb0W" x1="38.625" x2="7.121" y1="8.25" y2="55.161" gradientUnits="userSpaceOnUse"><stop class="tt8br1bqq"/><stop offset="1" class="dybrcqbqj"/></linearGradient></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-color:data-trending-48"} {...others} />);
}

export default Component;
