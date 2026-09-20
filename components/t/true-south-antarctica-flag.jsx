import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rmqh-0qpd.css';
import '../../css/q/qwvx9db4n.css';
import '../../css/v/v-nzsibot.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="rmqh-0qpd"/><path class="qwvx9db4n"/><path class="v-nzsibot"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:true-south-antarctica-flag"} {...others} />);
}

export default Component;
