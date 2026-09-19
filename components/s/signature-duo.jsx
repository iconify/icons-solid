import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n4qn6957a.css';
import '../../css/i/ir3ncbbaj.css';
import '../../css/t/ttmv56b5u.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="n4qn6957a"/><path clip-rule="evenodd" class="ir3ncbbaj"/><path class="ttmv56b5u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:signature-duo"} {...others} />);
}

export default Component;
