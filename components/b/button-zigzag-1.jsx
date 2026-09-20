import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uanrmkuqh.css';
import '../../css/v/vsn606bdm.css';
import '../../css/w/wa7i5m64f.css';
import '../../css/z/zhuvgobpv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="uanrmkuqh"/><path class="vsn606bdm"/><path class="wa7i5m64f"/><path class="zhuvgobpv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:button-zigzag-1"} {...others} />);
}

export default Component;
