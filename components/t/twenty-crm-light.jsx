import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s0amaqwhn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="s0amaqwhn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:twenty-crm-light"} {...others} />);
}

export default Component;
