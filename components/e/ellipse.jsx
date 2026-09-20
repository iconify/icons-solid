import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wl2zdmyxl.css';

const viewBox = {"width":24,"height":24};
const content = `<ellipse class="wl2zdmyxl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:ellipse"} {...others} />);
}

export default Component;
