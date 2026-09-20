import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r7g2pcbpg.css';
import '../../css/g/gx1dibbnm.css';
import '../../css/u/ucj31ibdn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="r7g2pcbpg"/><path class="gx1dibbnm"/><path class="ucj31ibdn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:power-filled"} {...others} />);
}

export default Component;
