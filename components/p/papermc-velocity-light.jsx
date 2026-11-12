import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xndlizbvy.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xndlizbvy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:papermc-velocity-light"} {...others} />);
}

export default Component;
