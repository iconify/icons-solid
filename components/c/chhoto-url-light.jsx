import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fhgf2cphm.css';
import '../../css/h/h_f86fbgy.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fhgf2cphm"/><path class="h_f86fbgy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:chhoto-url-light"} {...others} />);
}

export default Component;
