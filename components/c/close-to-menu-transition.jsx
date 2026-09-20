import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kmz6kf.css';
import '../../css/d/d-jarxnk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kmz6kf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:close-to-menu-transition"} {...others} />);
}

export default Component;
