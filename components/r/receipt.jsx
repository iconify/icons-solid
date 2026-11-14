import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/ovgmllbso.css';
import '../../css/y/ycl6bdb0d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ovgmllbso"/><path class="ycl6bdb0d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:receipt"} {...others} />);
}

export default Component;
