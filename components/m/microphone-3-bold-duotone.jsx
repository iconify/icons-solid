import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ue2-q7bvs.css';
import '../../css/o/omzwhtckx.css';
import '../../css/y/ykxzx4ykb.css';
import '../../css/o/o44rtxuym.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ue2-q7bvs"/><path class="omzwhtckx"/><path class="ykxzx4ykb"/><path clip-rule="evenodd" class="o44rtxuym"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:microphone-3-bold-duotone"} {...others} />);
}

export default Component;
