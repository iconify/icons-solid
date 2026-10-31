import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dio1l6b5t.css';
import '../../css/u/ubqfwcbya.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="dio1l6b5t"/><path class="ubqfwcbya"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:stopwatch-duocolor-round"} {...others} />);
}

export default Component;
