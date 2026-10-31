import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/snkvu_bzj.css';
import '../../css/j/j9gdhp6om.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="snkvu_bzj"/><path class="j9gdhp6om"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:wifi-problem-duocolor-round"} {...others} />);
}

export default Component;
