import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtpeb-edw.css';
import '../../css/m/me44qacwj.css';
import '../../css/f/fpb37bc7d.css';
import '../../css/r/r0kfjhb-d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xtpeb-edw"><path class="me44qacwj"/><path class="fpb37bc7d"/></g><path clip-rule="evenodd" class="r0kfjhb-d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cart-2-bold-duotone"} {...others} />);
}

export default Component;
