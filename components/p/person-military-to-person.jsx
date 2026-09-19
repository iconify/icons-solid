import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sb0b3q3bt.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="sb0b3q3bt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:person-military-to-person"} {...others} />);
}

export default Component;
