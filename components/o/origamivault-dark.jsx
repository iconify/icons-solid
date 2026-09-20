import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iijq8npej.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="iijq8npej"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:origamivault-dark"} {...others} />);
}

export default Component;
