import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ra1_58_jv.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ra1_58_jv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:square-full"} {...others} />);
}

export default Component;
