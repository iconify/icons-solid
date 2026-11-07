import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a_0l8pw0z.css';
import '../../css/d/dt2d6ubkc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a_0l8pw0z"/><path class="dt2d6ubkc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cloud-snowfall-outline"} {...others} />);
}

export default Component;
