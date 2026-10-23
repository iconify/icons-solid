import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/iip00-5-u.css';
import '../../css/h/hjri0rbby.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="iip00-5-u"/><path class="hjri0rbby"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:map-pin-search"} {...others} />);
}

export default Component;
