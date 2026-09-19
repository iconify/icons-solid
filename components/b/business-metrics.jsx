import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x0jy9xbgn.css';
import '../../css/l/l2p99h1gu.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="x0jy9xbgn"/><path class="l2p99h1gu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:business-metrics"} {...others} />);
}

export default Component;
