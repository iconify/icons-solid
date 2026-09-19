import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y6gtys2su.css';

const viewBox = {"width":1536,"height":1792};
const content = `<path class="y6gtys2su"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:paypal"} {...others} />);
}

export default Component;
