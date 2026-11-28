import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/n7r7azbdm.css';
import '../../css/o/ovrfz0-dn.css';
import '../../css/w/wj5b3pbsu.css';
import '../../css/e/eqibqh45w.css';
import '../../css/e/eybwu6b-u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="n7r7azbdm"/><path class="ovrfz0-dn"/><path class="wj5b3pbsu"/><path class="eqibqh45w"/><path class="eybwu6b-u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:oven"} {...others} />);
}

export default Component;
