import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pk9loab2h.css';

const viewBox = {"width":512,"height":456};
const content = `<path class="pk9loab2h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:battery-charge"} {...others} />);
}

export default Component;
