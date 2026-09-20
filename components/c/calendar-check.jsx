import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/skysp3s0f.css';
import '../../css/o/ow6v38err.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="skysp3s0f"/><path clip-rule="evenodd" class="ow6v38err"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:calendar-check"} {...others} />);
}

export default Component;
