import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vmlb6r02r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vmlb6r02r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:reply-all-outline"} {...others} />);
}

export default Component;
