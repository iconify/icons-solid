import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kt1r8gblm.css';
import '../../css/x/xw7rg0bvh.css';
import '../../css/y/yj9qhjbhp.css';
import '../../css/b/b-s_5jofa.css';
import '../../css/z/z5d075b0x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kt1r8gblm"/><path class="xw7rg0bvh"/><path class="yj9qhjbhp"/><path class="b-s_5jofa"/><path class="z5d075b0x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:monitor"} {...others} />);
}

export default Component;
