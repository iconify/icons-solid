import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x200p5olh.css';
import '../../css/e/em7taqccy.css';
import '../../css/g/gue0_kbzj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="x200p5olh"/><rect class="em7taqccy"/><path class="gue0_kbzj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:presentation-screen-filled"} {...others} />);
}

export default Component;
