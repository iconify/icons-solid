import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ei6mfwbgr.css';
import '../../css/b/bc_0ayxta.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ei6mfwbgr"/><path class="bc_0ayxta"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:cache-16"} {...others} />);
}

export default Component;
