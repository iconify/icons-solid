import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/an1b2abwc.css';
import '../../css/a/aez-bmivh.css';
import '../../css/x/xo56y0b0p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="an1b2abwc"/><path clip-rule="evenodd" class="aez-bmivh"/><path class="xo56y0b0p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:posts-carousel-vertical-outline"} {...others} />);
}

export default Component;
