import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/yvy2dvbhb.css';
import '../../css/u/u2g8zehxd.css';
import '../../css/o/oakja4bgh.css';
import '../../css/r/rc6gaabib.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="yvy2dvbhb"/><path class="u2g8zehxd"/><path class="oakja4bgh"/><path class="rc6gaabib"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:smileys"} {...others} />);
}

export default Component;
