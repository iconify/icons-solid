import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/o/ordx5ez8n.css';
import '../../css/k/ksulm8rer.css';
import '../../css/o/oh4nb-bcs.css';
import '../../css/z/zmpq0dbjk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="ordx5ez8n wm-deco"/><path class="ksulm8rer wm-deco"/><path class="oh4nb-bcs"/><path class="zmpq0dbjk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chevron-up-blueprint"} {...others} />);
}

export default Component;
