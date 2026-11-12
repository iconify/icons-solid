import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s0s5asbdi.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="s0s5asbdi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:united-airlines-light"} {...others} />);
}

export default Component;
