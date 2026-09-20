import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zsjpyz3yx.css';
import '../../css/b/boexblb8b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="zsjpyz3yx"/><path class="boexblb8b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:message-circle-question-mark"} {...others} />);
}

export default Component;
