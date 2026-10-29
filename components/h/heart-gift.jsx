import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/qiyypgbtt.css';
import '../../css/s/swv5gibmp.css';
import '../../css/w/wer_ogb9b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="qiyypgbtt"/><path class="swv5gibmp wm-a"/><path class="wer_ogb9b wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:heart-gift"} {...others} />);
}

export default Component;
