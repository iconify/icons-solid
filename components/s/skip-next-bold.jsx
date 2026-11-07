import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cdhe4sbui.css';
import '../../css/x/xv7by3x_x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cdhe4sbui"/><path class="xv7by3x_x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:skip-next-bold"} {...others} />);
}

export default Component;
