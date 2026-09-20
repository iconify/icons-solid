import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p1-_05cxh.css';
import '../../css/e/e3-ekfbhp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="p1-_05cxh"/><path class="e3-ekfbhp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:football"} {...others} />);
}

export default Component;
