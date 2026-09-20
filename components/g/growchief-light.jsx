import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p8x_9lbbu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="p8x_9lbbu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:growchief-light"} {...others} />);
}

export default Component;
