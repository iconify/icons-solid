import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/ubq9ihbin.css';
import '../../css/q/qfu7ueb2w.css';
import '../../css/w/w8dto046u.css';
import '../../css/m/m1lsa9pun.css';
import '../../css/s/sa3gq0d8x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="ubq9ihbin"/><path class="qfu7ueb2w"/><path class="w8dto046u"/><path class="m1lsa9pun"/><path class="sa3gq0d8x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:expand-vertical"} {...others} />);
}

export default Component;
