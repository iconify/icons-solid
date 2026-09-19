import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qqy0_y_xf.css';
import '../../css/f/fbx8fkb6d.css';

const viewBox = {"width":24,"height":24};
const content = `<rect class="qqy0_y_xf"/><rect transform="rotate(-90 5 6)" class="qqy0_y_xf"/><path class="fbx8fkb6d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:thermometer-plus-outline"} {...others} />);
}

export default Component;
