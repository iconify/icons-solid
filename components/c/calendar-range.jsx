import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p2tevlb2z.css';
import '../../css/b/b8cr_bbou.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="p2tevlb2z"/><path class="b8cr_bbou"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:calendar-range"} {...others} />);
}

export default Component;
