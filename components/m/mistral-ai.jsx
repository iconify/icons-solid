import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vrzndr38o.css';
import '../../css/w/wi_3t4bww.css';
import '../../css/h/hx0ghdc5i.css';
import '../../css/j/jy7s7pboj.css';
import '../../css/v/v66b5raoq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vrzndr38o"/><path class="wi_3t4bww"/><path class="hx0ghdc5i"/><path class="jy7s7pboj"/><path class="v66b5raoq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:mistral-ai"} {...others} />);
}

export default Component;
