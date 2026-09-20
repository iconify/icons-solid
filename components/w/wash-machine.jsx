import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dc9lci3fy.css';
import '../../css/h/hn2o_9mai.css';
import '../../css/w/wko14xbwz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="dc9lci3fy"/><path class="hn2o_9mai"/><path class="wko14xbwz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:wash-machine"} {...others} />);
}

export default Component;
