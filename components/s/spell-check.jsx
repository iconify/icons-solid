import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/y7hkb8btc.css';
import '../../css/k/k1j_3lqxj.css';
import '../../css/y/y9nrp2lfs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="y7hkb8btc"/><path class="k1j_3lqxj"/><path class="wm-s y9nrp2lfs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:spell-check"} {...others} />);
}

export default Component;
