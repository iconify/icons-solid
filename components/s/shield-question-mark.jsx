import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/eg4h66b1c.css';
import '../../css/g/g819yab9b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="eg4h66b1c"/><path class="g819yab9b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:shield-question-mark"} {...others} />);
}

export default Component;
