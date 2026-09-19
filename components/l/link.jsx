import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d4wkg5yij.css';
import '../../css/n/nv5c7mbim.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d4wkg5yij"/><path class="nv5c7mbim"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:link"} {...others} />);
}

export default Component;
