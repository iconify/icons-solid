import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rkftr6bal.css';
import '../../css/o/of7e8kpvp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rkftr6bal"/><path class="of7e8kpvp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-camera"} {...others} />);
}

export default Component;
