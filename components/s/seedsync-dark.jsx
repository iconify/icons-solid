import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xf7n-7b7h.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xf7n-7b7h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:seedsync-dark"} {...others} />);
}

export default Component;
