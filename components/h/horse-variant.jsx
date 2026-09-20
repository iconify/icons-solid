import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n85pmxy0k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n85pmxy0k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:horse-variant"} {...others} />);
}

export default Component;
