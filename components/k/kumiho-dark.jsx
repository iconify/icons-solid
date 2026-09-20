import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iv10l8h9u.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="iv10l8h9u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:kumiho-dark"} {...others} />);
}

export default Component;
