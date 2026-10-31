import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jxz1iaboq.css';
import '../../css/u/uq9jp9bdl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="jxz1iaboq"/><path class="uq9jp9bdl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:users-group-duocolor-round"} {...others} />);
}

export default Component;
