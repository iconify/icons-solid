import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j3-7hvbxm.css';
import '../../css/o/oegw8x_4v.css';
import '../../css/o/omyl4l_lf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="j3-7hvbxm"/><path class="oegw8x_4v"/><path class="omyl4l_lf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:hat-bowler"} {...others} />);
}

export default Component;
