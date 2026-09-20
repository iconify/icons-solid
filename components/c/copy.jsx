import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p50qzbcks.css';
import '../../css/w/w8f9-0zcx.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="p50qzbcks"/><path class="w8f9-0zcx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nimbus:copy"} {...others} />);
}

export default Component;
