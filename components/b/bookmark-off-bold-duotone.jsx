import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pfg33ubfc.css';
import '../../css/p/pjltp9b6o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pfg33ubfc"/><path class="pjltp9b6o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bookmark-off-bold-duotone"} {...others} />);
}

export default Component;
