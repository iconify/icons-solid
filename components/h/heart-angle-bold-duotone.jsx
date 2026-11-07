import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e7uoogagy.css';
import '../../css/p/pwof45wsf.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="e7uoogagy"/><path class="pwof45wsf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:heart-angle-bold-duotone"} {...others} />);
}

export default Component;
