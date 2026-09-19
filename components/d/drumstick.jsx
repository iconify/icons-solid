import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nlggf5fnk.css';

const viewBox = {"width":1664,"height":1792};
const content = `<path class="nlggf5fnk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vs:drumstick"} {...others} />);
}

export default Component;
