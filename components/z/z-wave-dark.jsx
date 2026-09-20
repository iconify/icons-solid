import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kjfq8ra2c.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kjfq8ra2c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:z-wave-dark"} {...others} />);
}

export default Component;
