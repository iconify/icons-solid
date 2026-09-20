import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yzsxfebud.css';
import '../../css/f/fmy9nacam.css';
import '../../css/f/fyqrbo7td.css';
import '../../css/d/dtzs14bot.css';
import '../../css/u/ur6v5_b8c.css';
import '../../css/b/bqiwrx_sw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yzsxfebud"/><path class="fmy9nacam"/><path class="fyqrbo7td"/><path class="dtzs14bot"/><path class="ur6v5_b8c"/><path class="bqiwrx_sw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:btu"} {...others} />);
}

export default Component;
