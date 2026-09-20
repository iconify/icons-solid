import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fhd73iz3o.css';
import '../../css/f/fjk7q33ni.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fhd73iz3o"/><path class="fjk7q33ni"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:heyform-dark"} {...others} />);
}

export default Component;
