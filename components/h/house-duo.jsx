import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tbvfrjx3h.css';
import '../../css/o/o27xq5dpn.css';
import '../../css/g/gnd_ri50r.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="tbvfrjx3h"/><path class="o27xq5dpn"/><path class="gnd_ri50r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:house-duo"} {...others} />);
}

export default Component;
