import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lf8g6jb6t.css';
import '../../css/y/yrg7pgb0m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lf8g6jb6t"/><path class="yrg7pgb0m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:stars-2-bold-duotone"} {...others} />);
}

export default Component;
