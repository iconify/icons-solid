import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ftd6m5bxf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ftd6m5bxf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:philips-hue-dark"} {...others} />);
}

export default Component;
