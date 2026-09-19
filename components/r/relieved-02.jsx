import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/kmnr8jx4o.css';
import '../../css/v/v-20dbb3u.css';
import '../../css/v/vg0fnxsll.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><circle class="kmnr8jx4o"/><path class="v-20dbb3u"/><path class="vg0fnxsll"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:relieved-02"} {...others} />);
}

export default Component;
