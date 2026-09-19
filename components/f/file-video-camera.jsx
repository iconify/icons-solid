import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/l4wkt2bpa.css';
import '../../css/y/yxathibks.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="l4wkt2bpa"/><path class="yxathibks"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:file-video-camera"} {...others} />);
}

export default Component;
