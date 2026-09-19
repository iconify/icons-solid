import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o6yzo2b5e.css';
import '../../css/q/qzignebpq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="o6yzo2b5e"/><path class="qzignebpq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:timer-outline"} {...others} />);
}

export default Component;
