import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/gv2q46bih.css';
import '../../css/w/w9gxc91ei.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="gv2q46bih"/><path class="w9gxc91ei"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:home-05"} {...others} />);
}

export default Component;
