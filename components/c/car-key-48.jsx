import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bazb3ccgr.css';
import '../../css/y/yy05a9bqd.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="bazb3ccgr"/><path class="yy05a9bqd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:car-key-48"} {...others} />);
}

export default Component;
