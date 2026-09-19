import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ezy7dxiok.css';
import '../../css/o/o_rzsi0tj.css';
import '../../css/j/jxz1lf3mf.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><rect transform="rotate(45 39.94 6)" class="ezy7dxiok"/><path class="o_rzsi0tj"/><path class="jxz1lf3mf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:turn-sign"} {...others} />);
}

export default Component;
