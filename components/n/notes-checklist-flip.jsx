import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/xkbxa55eq.css';
import '../../css/j/j5_xo5blq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="xkbxa55eq"/><path class="j5_xo5blq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:notes-checklist-flip"} {...others} />);
}

export default Component;
