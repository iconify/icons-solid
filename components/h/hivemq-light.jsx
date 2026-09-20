import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hke8i3ela.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hke8i3ela"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:hivemq-light"} {...others} />);
}

export default Component;
