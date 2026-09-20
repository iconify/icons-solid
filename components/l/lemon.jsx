import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y3g4q6bxs.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="y3g4q6bxs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:lemon"} {...others} />);
}

export default Component;
