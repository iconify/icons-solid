import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/o6vxf8bug.css';
import '../../css/j/jvcaccb8f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="o6vxf8bug"/><path class="jvcaccb8f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:journal"} {...others} />);
}

export default Component;
