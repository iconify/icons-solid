import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/je3f1fp5o.css';
import '../../css/j/jgongpb2z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="je3f1fp5o"/><path class="jgongpb2z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:stethoscope"} {...others} />);
}

export default Component;
