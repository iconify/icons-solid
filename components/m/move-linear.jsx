import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/v9c03hitk.css';
import '../../css/s/ssdz2eb2w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="v9c03hitk"/><path class="ssdz2eb2w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:move-linear"} {...others} />);
}

export default Component;
