import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k_lzigb0e.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="k_lzigb0e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:user-friends"} {...others} />);
}

export default Component;
