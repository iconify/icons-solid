import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bb1wm_dxf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bb1wm_dxf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:folder-music-fill"} {...others} />);
}

export default Component;
