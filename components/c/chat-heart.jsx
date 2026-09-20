import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lcg626bqg.css';
import '../../css/i/i7_qlrbtz.css';
import '../../css/m/miqf99bxq.css';
import '../../css/r/rmxdniboc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lcg626bqg"/><path clip-rule="evenodd" class="i7_qlrbtz"/><path class="miqf99bxq"/><path clip-rule="evenodd" class="rmxdniboc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:chat-heart"} {...others} />);
}

export default Component;
