import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nje-blbai.css';
import '../../css/h/hz14bnbit.css';
import '../../css/h/hjbk2vhyq.css';
import '../../css/h/hm4r8ob9n.css';
import '../../css/y/yk2rlxbgj.css';
import '../../css/j/jgjwmgbxr.css';
import '../../css/g/gkxcpnixy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="nje-blbai"/><path class="hz14bnbit"/><path class="hjbk2vhyq"/><path class="hm4r8ob9n"/><path class="yk2rlxbgj"/><path class="jgjwmgbxr"/><path class="gkxcpnixy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:monitor-flash"} {...others} />);
}

export default Component;
