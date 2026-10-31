import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jd_0ujzkm.css';
import '../../css/p/pk_rosbpc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="jd_0ujzkm"/><path class="pk_rosbpc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:fish-duocolor-round"} {...others} />);
}

export default Component;
