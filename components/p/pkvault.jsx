import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rpeqg5n3y.css';
import '../../css/o/ox5yvjbxk.css';
import '../../css/x/xy9g--g5g.css';
import '../../css/q/qimo3wbht.css';
import '../../css/z/zkjmso1sr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rpeqg5n3y"/><path class="ox5yvjbxk"/><path class="xy9g--g5g"/><path class="qimo3wbht"/><circle class="zkjmso1sr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:pkvault"} {...others} />);
}

export default Component;
