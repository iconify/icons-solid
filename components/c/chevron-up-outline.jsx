import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p8zxhs7lc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="p8zxhs7lc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:chevron-up-outline"} {...others} />);
}

export default Component;
