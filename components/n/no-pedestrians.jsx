import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yjma1yhgw.css';
import '../../css/y/yi3jdwbhm.css';
import '../../css/x/x_8mct93v.css';
import '../../css/g/g_uixpdxn.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/f/fb76p4b_a.css';
import '../../css/y/yx3j-pcbw.css';
import '../../css/o/ontbvy8te.css';
import '../../css/z/zo1i1nbtj.css';
import '../../css/y/y-3sxcbit.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="yjma1yhgw"/><path class="yi3jdwbhm"/><path class="x_8mct93v"/><path class="g_uixpdxn"/><g class="jn8qy4bru"><circle class="fb76p4b_a"/><path class="yx3j-pcbw"/><path class="ontbvy8te"/><path class="zo1i1nbtj"/><circle class="y-3sxcbit"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:no-pedestrians"} {...others} />);
}

export default Component;
