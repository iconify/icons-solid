import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ogahin_3h.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/z5s_iw4ay.css';
import '../../css/d/dr0xlqb2l.css';
import '../../css/r/r7nyb4b5e.css';
import '../../css/t/t0rxzi1ao.css';
import '../../css/g/gp4e8i8_q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ogahin_3h secondary"/><g class="dt0cm9dhy primary"><path class="z5s_iw4ay"/><path class="dr0xlqb2l"/><path class="r7nyb4b5e"/><path class="t0rxzi1ao"/><path class="gp4e8i8_q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:baseball-duo"} {...others} />);
}

export default Component;
