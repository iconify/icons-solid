import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zigurz_7u.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zigurz_7u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:circle-exclamation"} {...others} />);
}

export default Component;
