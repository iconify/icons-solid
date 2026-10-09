import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aghjl2bmp.css';
import '../../css/i/ic8mjabnv.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="aghjl2bmp"/><path class="ic8mjabnv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mountain-snow-20-bold"} {...others} />);
}

export default Component;
