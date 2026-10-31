import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/h/hpzd0o1un.css';
import '../../css/h/h7_an4b6v.css';
import '../../css/v/vkq-lwbbj.css';
import '../../css/e/emlmruuit.css';
import '../../css/z/zp7-w1bua.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="hpzd0o1un wm-shadow"/><path class="h7_an4b6v wm-shadow"/><path class="vkq-lwbbj"/><path class="emlmruuit"/><path class="zp7-w1bua"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:mic-vocal"} {...others} />);
}

export default Component;
