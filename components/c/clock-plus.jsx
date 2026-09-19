import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/lwgq4-igf.css';
import '../../css/w/w4x4tnb7k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="lwgq4-igf"/><path class="w4x4tnb7k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:clock-plus"} {...others} />);
}

export default Component;
