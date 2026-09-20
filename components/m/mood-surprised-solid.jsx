import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nc96cz0xq.css';
import '../../css/j/jx5abbk2w.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="nc96cz0xq"/><path clip-rule="evenodd" class="jx5abbk2w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:mood-surprised-solid"} {...others} />);
}

export default Component;
