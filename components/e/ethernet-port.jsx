import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/ph3u7ibzm.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ph3u7ibzm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:ethernet-port"} {...others} />);
}

export default Component;
