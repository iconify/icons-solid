import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wrwywm8dv.css';
import '../../css/u/ucjoi-m7d.css';
import '../../css/g/gv8vpi07i.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="wrwywm8dv"/><path clip-rule="evenodd" class="ucjoi-m7d"/><path class="gv8vpi07i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:arrow-solid-bracket-end-bold"} {...others} />);
}

export default Component;
