import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yy4u890oc.css';
import '../../css/l/lcbvy6bhk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="yy4u890oc"/><path class="lcbvy6bhk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:crop-duocolor-round"} {...others} />);
}

export default Component;
