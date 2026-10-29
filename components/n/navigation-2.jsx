import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/l/lvdi9vbyy.css';
import '../../css/i/ikfdhw39k.css';
import '../../css/t/tvc8c8brf.css';
import '../../css/o/or-2tunoi.css';
import '../../css/y/ylpzvd3mu.css';
import '../../css/x/x7rzzrbin.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="lvdi9vbyy wm-shadow"/><path class="ikfdhw39k"/><path class="tvc8c8brf"/><path class="or-2tunoi"/><path class="wm-shine ylpzvd3mu"/><path class="wm-deco x7rzzrbin"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:navigation-2"} {...others} />);
}

export default Component;
