import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xwbdgq.css';
import '../../css/s/so-from-76.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xwbdgq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:bluesky"} {...others} />);
}

export default Component;
