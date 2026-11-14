import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/yd7yrj1be.css';
import '../../css/q/qnsdjybnt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="yd7yrj1be"/><path class="qnsdjybnt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:robot-02"} {...others} />);
}

export default Component;
