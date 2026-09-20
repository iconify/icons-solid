import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/api0k3bdp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="api0k3bdp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:hamburger-close"} {...others} />);
}

export default Component;
