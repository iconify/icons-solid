import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/trp_y9bit.css';
import '../../css/w/w2-20ab2x.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="trp_y9bit"/><path class="w2-20ab2x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:book-open-duo"} {...others} />);
}

export default Component;
