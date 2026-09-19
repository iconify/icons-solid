import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g79rgltqv.css';
import '../../css/i/i79d0rboe.css';

const viewBox = {"width":83,"height":82};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="g79rgltqv"/><path class="i79d0rboe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:puzzle-piece"} {...others} />);
}

export default Component;
