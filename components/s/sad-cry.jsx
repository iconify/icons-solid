import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/am770-rkn.css';
import '../../css/v/vnl0nvbii.css';
import '../../css/s/smvgl5sak.css';
import '../../css/h/h9qr1objm.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="am770-rkn"/><rect class="vnl0nvbii"/><path class="smvgl5sak"/><path class="h9qr1objm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:sad-cry"} {...others} />);
}

export default Component;
