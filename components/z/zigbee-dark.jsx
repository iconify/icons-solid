import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j1u6t7xfr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="j1u6t7xfr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:zigbee-dark"} {...others} />);
}

export default Component;
