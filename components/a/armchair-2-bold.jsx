import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l4b0zsbme.css';
import '../../css/q/q9j565bpq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l4b0zsbme"/><path class="q9j565bpq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:armchair-2-bold"} {...others} />);
}

export default Component;
