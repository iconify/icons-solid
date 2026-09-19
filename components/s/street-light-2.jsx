import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/t/twkxw5bcy.css';
import '../../css/j/jz_6ejuit.css';
import '../../css/o/oh5hsabmr.css';
import '../../css/e/e4jw92b5f.css';
import '../../css/e/e34kl9lhu.css';
import '../../css/y/y-csi79me.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="wwvp95byt"><path class="twkxw5bcy"/><path class="jz_6ejuit"/><rect class="oh5hsabmr"/><rect class="e4jw92b5f"/><rect class="e34kl9lhu"/><path class="y-csi79me"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:street-light-2"} {...others} />);
}

export default Component;
