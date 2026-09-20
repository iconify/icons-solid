import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j_v5ttqwr.css';
import '../../css/p/p-ziz4bqf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="j_v5ttqwr"/><path class="p-ziz4bqf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:zodiac-virgo"} {...others} />);
}

export default Component;
