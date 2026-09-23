import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qn0lq48aj.css';
import '../../css/h/hanb3q1-y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="qn0lq48aj"/><path class="hanb3q1-y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:language-sparkles-fill"} {...others} />);
}

export default Component;
