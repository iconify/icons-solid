import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hs6rbmbln.css';
import '../../css/w/w722mfbgk.css';
import '../../css/m/mayyj1h2w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="hs6rbmbln"/><path class="w722mfbgk"/><path class="mayyj1h2w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:oven-mitts-broken"} {...others} />);
}

export default Component;
