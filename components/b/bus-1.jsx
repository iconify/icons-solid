import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cqmqxhpqk.css';
import '../../css/n/n5t4ppego.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cqmqxhpqk"/><path class="n5t4ppego"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:bus-1"} {...others} />);
}

export default Component;
