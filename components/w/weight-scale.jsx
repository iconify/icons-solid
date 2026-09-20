import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i07gtwbuw.css';
import '../../css/y/ygl7ebcwj.css';
import '../../css/u/uaixagjtg.css';
import '../../css/g/g9sivlltp.css';
import '../../css/m/m852rkfpq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="i07gtwbuw"/><path class="ygl7ebcwj"/><path class="uaixagjtg"/><path class="g9sivlltp"/><path class="m852rkfpq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:weight-scale"} {...others} />);
}

export default Component;
