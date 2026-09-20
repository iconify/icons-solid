import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mrn1n11ow.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mrn1n11ow"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:whatsapp-dark"} {...others} />);
}

export default Component;
