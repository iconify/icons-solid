import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/uwtaq622d.css';
import '../../css/y/y1vfx0ptl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="uwtaq622d"/><path class="y1vfx0ptl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:file-pin"} {...others} />);
}

export default Component;
