import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fq2jchbdb.css';
import '../../css/m/mhf7b27xx.css';
import '../../css/w/w-zm1cbor.css';
import '../../css/l/l78br_b1h.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="fq2jchbdb"/><path class="mhf7b27xx"/><path class="w-zm1cbor"/><path class="l78br_b1h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:comment-asterisk"} {...others} />);
}

export default Component;
