import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dmyibhbsj.css';
import '../../css/j/jmxdkccdz.css';
import '../../css/g/gwpwcgbts.css';
import '../../css/p/pcai_ivgu.css';
import '../../css/y/yu0es49hn.css';
import '../../css/h/hk7b8-v-v.css';
import '../../css/b/bpwrt3b3c.css';
import '../../css/b/b-biugbmh.css';

const viewBox = {"width":288.261,"height":225.596};
const content = `<path class="dmyibhbsj"/><path class="jmxdkccdz"/><path class="gwpwcgbts"/><path class="pcai_ivgu"/><path class="yu0es49hn"/><path class="hk7b8-v-v"/><path class="bpwrt3b3c"/><path class="b-biugbmh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:mountain-dew"} {...others} />);
}

export default Component;
