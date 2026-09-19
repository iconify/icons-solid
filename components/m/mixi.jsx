import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p4tn7uvvx.css';

const viewBox = {"width":717,"height":690};
const content = `<path class="p4tn7uvvx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ls:mixi"} {...others} />);
}

export default Component;
