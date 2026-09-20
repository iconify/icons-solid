import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ugrr9h0ha.css';
import '../../css/k/k2u665ban.css';
import '../../css/t/tr7-om0iy.css';
import '../../css/u/uxc53mb9l.css';
import '../../css/l/llciyvb1b.css';
import '../../css/x/x5jvcdt8k.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVG161qf1bi" class="ugrr9h0ha"/></defs><g class="k2u665ban"><path class="tr7-om0iy"/><use href="#SVG161qf1bi"/><use href="#SVG161qf1bi"/><path class="uxc53mb9l"/><path class="llciyvb1b"/><path class="x5jvcdt8k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:fortune-telling-sphere"} {...others} />);
}

export default Component;
