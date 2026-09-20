import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jkq7-hbwz.css';
import '../../css/f/fkj3babog.css';
import '../../css/j/jikf94dvb.css';
import '../../css/u/unrigqlox.css';
import '../../css/l/lk8duns4e.css';
import '../../css/w/w4ct5vdyb.css';
import '../../css/j/jk8gicbju.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="jkq7-hbwz"/><path class="fkj3babog"/><path class="jikf94dvb"/><path class="unrigqlox"/><path class="lk8duns4e"/><path class="w4ct5vdyb"/><path class="jk8gicbju"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-gibraltar"} {...others} />);
}

export default Component;
