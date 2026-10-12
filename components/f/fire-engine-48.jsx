import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ohs7hsjpb.css';
import '../../css/s/sdzy7xbyh.css';
import '../../css/j/j3w9z2dlq.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ohs7hsjpb"/><path class="sdzy7xbyh"/><path class="j3w9z2dlq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:fire-engine-48"} {...others} />);
}

export default Component;
