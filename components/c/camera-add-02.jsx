import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/a810woxuh.css';
import '../../css/y/yrkmgwb6h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="a810woxuh"/><path class="yrkmgwb6h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:camera-add-02"} {...others} />);
}

export default Component;
