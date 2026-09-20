import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jr_lfjq_q.css';
import '../../css/k/k-5ymtuzc.css';
import '../../css/g/gfl9d5bck.css';
import '../../css/p/p8c4z55ox.css';
import '../../css/k/ky1w9mbof.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="jr_lfjq_q"/><path class="k-5ymtuzc"/><path class="gfl9d5bck"/><path class="p8c4z55ox"/><path class="ky1w9mbof"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:boxing-bag-hanging"} {...others} />);
}

export default Component;
