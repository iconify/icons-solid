import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gy29vdbwc.css';
import '../../css/p/p8jj4km5n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gy29vdbwc"/><path class="p8jj4km5n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:ixt"} {...others} />);
}

export default Component;
