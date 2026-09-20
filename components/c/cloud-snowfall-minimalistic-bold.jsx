import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pdzz5drvs.css';
import '../../css/q/qkv_jnvrp.css';
import '../../css/t/tz5xo4bcd.css';
import '../../css/o/ofb7nkkeq.css';
import '../../css/h/h1d9tmxie.css';
import '../../css/g/g00h8qyhs.css';
import '../../css/q/q3-49ab4q.css';
import '../../css/i/igzm4qf1w.css';
import '../../css/j/j2nqhrbqv.css';
import '../../css/z/zlkql3bcv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="pdzz5drvs"/><path class="qkv_jnvrp"/><path class="tz5xo4bcd"/><path class="ofb7nkkeq"/><path class="h1d9tmxie"/><path class="g00h8qyhs"/><path class="q3-49ab4q"/><path class="igzm4qf1w"/><path class="j2nqhrbqv"/><path class="zlkql3bcv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cloud-snowfall-minimalistic-bold"} {...others} />);
}

export default Component;
