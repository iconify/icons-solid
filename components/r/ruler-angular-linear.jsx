import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bk50ckbpt.css';
import '../../css/s/s9qxbdczi.css';
import '../../css/u/urvibib1y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="bk50ckbpt"/><path class="s9qxbdczi"/><path class="urvibib1y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:ruler-angular-linear"} {...others} />);
}

export default Component;
