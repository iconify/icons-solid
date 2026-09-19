import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/osbk2_69o.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="osbk2_69o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:social-whatsapp"} {...others} />);
}

export default Component;
