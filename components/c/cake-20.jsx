import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ydgeh8l8d.css';
import '../../css/y/yp7spr8cr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ydgeh8l8d"/><path class="yp7spr8cr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cake-20"} {...others} />);
}

export default Component;
