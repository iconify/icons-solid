import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kxlaa1b7n.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kxlaa1b7n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:invoice-ninja-light"} {...others} />);
}

export default Component;
