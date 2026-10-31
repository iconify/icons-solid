import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sx51nsb1t.css';
import '../../css/p/p0m1qu7vu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="sx51nsb1t"/><path class="p0m1qu7vu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:raccoon-duocolor-round"} {...others} />);
}

export default Component;
