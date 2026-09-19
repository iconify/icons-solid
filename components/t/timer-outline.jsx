import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y4ok1rbpw.css';
import '../../css/n/nj-njzi3z.css';
import '../../css/q/qr5642oux.css';
import '../../css/f/fhj2lacnc.css';
import '../../css/r/r1iqdjbid.css';
import '../../css/z/zyf6r_b-y.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="y4ok1rbpw"/><path class="nj-njzi3z"/><path clip-rule="evenodd" class="qr5642oux"/><path clip-rule="evenodd" class="fhj2lacnc"/><path class="r1iqdjbid"/><path clip-rule="evenodd" class="zyf6r_b-y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:timer-outline"} {...others} />);
}

export default Component;
