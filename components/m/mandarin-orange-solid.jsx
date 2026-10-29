import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fg-3ctk7x.css';
import '../../css/u/u252acb1c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="fg-3ctk7x"/><path class="u252acb1c wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:mandarin-orange-solid"} {...others} />);
}

export default Component;
