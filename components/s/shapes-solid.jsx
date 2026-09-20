import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l8pz_1b0s.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="l8pz_1b0s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:shapes-solid"} {...others} />);
}

export default Component;
