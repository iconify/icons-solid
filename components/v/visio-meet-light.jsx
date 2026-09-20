import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vcx7vsbri.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vcx7vsbri"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:visio-meet-light"} {...others} />);
}

export default Component;
