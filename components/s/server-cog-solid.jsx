import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nmgjinb-j.css';
import '../../css/c/clkkgpbwe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="nmgjinb-j"/><path class="clkkgpbwe wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:server-cog-solid"} {...others} />);
}

export default Component;
