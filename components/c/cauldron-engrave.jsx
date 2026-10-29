import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/a92_7somy.css';
import '../../css/k/kznvhlblq.css';
import '../../css/z/z_x2gbneb.css';
import '../../css/n/nlzmg1ubk.css';
import '../../css/j/jj9hj585s.css';
import '../../css/p/p54t-9u0q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="a92_7somy wm-k"/><path class="kznvhlblq wm-s"/><path class="wm-shadow z_x2gbneb"/><path class="nlzmg1ubk wm-k"/><path class="jj9hj585s wm-k"/><path class="p54t-9u0q wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cauldron-engrave"} {...others} />);
}

export default Component;
