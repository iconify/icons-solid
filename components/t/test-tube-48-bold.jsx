import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/siepju6rr.css';
import '../../css/o/o2a3vtbnh.css';
import '../../css/p/p6ygvpb6y.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="siepju6rr"/><path class="o2a3vtbnh"/><path class="p6ygvpb6y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:test-tube-48-bold"} {...others} />);
}

export default Component;
