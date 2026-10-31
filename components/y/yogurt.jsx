import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/abd7lwnwy.css';
import '../../css/k/kteoaub9b.css';
import '../../css/s/sl8hfs9hb.css';
import '../../css/n/nr01x2bah.css';
import '../../css/a/a7h-90gwh.css';
import '../../css/r/rw_jabb2x.css';
import '../../css/r/r0m1tybog.css';
import '../../css/v/vk6hpfbbg.css';
import '../../css/n/nqmem8bri.css';
import '../../css/j/jc63iw7hx.css';
import '../../css/h/hugttp4qd.css';
import '../../css/n/nb9g0pbmy.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="abd7lwnwy"/><path class="kteoaub9b"/><path class="sl8hfs9hb"/><path class="nr01x2bah"/><path class="a7h-90gwh"/><path class="rw_jabb2x"/><path class="r0m1tybog"/><path class="vk6hpfbbg"/><path class="nqmem8bri"/><path class="jc63iw7hx"/><path class="hugttp4qd"/><path class="nb9g0pbmy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconito:yogurt"} {...others} />);
}

export default Component;
