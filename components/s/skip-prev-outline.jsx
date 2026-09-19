import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qu_3bybmc.css';
import '../../css/k/ki8ztfb6v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qu_3bybmc"/><path clip-rule="evenodd" class="ki8ztfb6v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:skip-prev-outline"} {...others} />);
}

export default Component;
