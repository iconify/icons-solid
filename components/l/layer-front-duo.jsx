import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/ttg49pgqf.css';
import '../../css/m/mynzkfb2a.css';
import '../../css/p/p4c177ohf.css';
import '../../css/q/qchq462ch.css';
import '../../css/a/a6_rmbcth.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="ttg49pgqf"/><path class="mynzkfb2a"/><path class="p4c177ohf"/><path class="qchq462ch"/><path class="a6_rmbcth"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:layer-front-duo"} {...others} />);
}

export default Component;
