import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rq31kobat.css';
import '../../css/x/xcgq2ybhj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="rq31kobat"/><path class="xcgq2ybhj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:memory-chip-48"} {...others} />);
}

export default Component;
