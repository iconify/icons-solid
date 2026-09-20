import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lrvqps0xa.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="lrvqps0xa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:x-ray-solid"} {...others} />);
}

export default Component;
