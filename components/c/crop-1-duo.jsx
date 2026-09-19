import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ea_n0eb7u.css';
import '../../css/l/lwi-ajbjg.css';
import '../../css/d/do6sbpbpf.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="ea_n0eb7u"/><path class="lwi-ajbjg"/><path class="do6sbpbpf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:crop-1-duo"} {...others} />);
}

export default Component;
