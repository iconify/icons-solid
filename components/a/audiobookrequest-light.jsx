import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xixhcda9n.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xixhcda9n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:audiobookrequest-light"} {...others} />);
}

export default Component;
