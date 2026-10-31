import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xsgqi2bof.css';
import '../../css/j/jx9cq1bfm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="xsgqi2bof"/><path class="jx9cq1bfm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:paint-bucket-duocolor-round"} {...others} />);
}

export default Component;
