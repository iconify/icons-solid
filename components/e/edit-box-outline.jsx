import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f9vy1xbem.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f9vy1xbem"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:edit-box-outline"} {...others} />);
}

export default Component;
