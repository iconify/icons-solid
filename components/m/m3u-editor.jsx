import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ujivq7b7t.css';
import '../../css/f/fixdu2n4y.css';
import '../../css/w/wz00z2k7d.css';
import '../../css/r/rl88n_b7j.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGxKrMHdEF" x1="37.127" x2="437.695" y1="139.288" y2="358.125" gradientTransform="matrix(1 0 0 -1 0 514.81)" gradientUnits="userSpaceOnUse"><stop offset="0" class="ujivq7b7t"/><stop offset=".37" class="fixdu2n4y"/><stop offset=".81" class="wz00z2k7d"/></linearGradient><path fill="url(#SVGxKrMHdEF)" class="rl88n_b7j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:m3u-editor"} {...others} />);
}

export default Component;
