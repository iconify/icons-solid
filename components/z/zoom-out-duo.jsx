import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pifz1vb5p.css';
import '../../css/e/eav0d1b2y.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="pifz1vb5p"/><path class="eav0d1b2y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:zoom-out-duo"} {...others} />);
}

export default Component;
