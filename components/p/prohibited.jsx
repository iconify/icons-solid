import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yjma1yhgw.css';
import '../../css/y/yi3jdwbhm.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/f/fb76p4b_a.css';
import '../../css/y/yx3j-pcbw.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="yjma1yhgw"/><path class="yi3jdwbhm"/><g class="jn8qy4bru"><circle class="fb76p4b_a"/><path class="yx3j-pcbw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:prohibited"} {...others} />);
}

export default Component;
