import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/durrixbcc.css';
import '../../css/h/hf869sb1k.css';
import '../../css/h/hibcrvbqz.css';
import '../../css/h/hina6zh8z.css';
import '../../css/m/mq_a-6b-m.css';
import '../../css/q/qz7uzdb5z.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="durrixbcc"/><path class="hf869sb1k"/><path class="hibcrvbqz"/><path class="hina6zh8z"/><path class="mq_a-6b-m"/><path class="qz7uzdb5z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:kitsu-dark"} {...others} />);
}

export default Component;
