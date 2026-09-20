import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v-3x22bpv.css';
import '../../css/o/on-5asnsy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="v-3x22bpv"/><path class="on-5asnsy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:bookmarks-filled"} {...others} />);
}

export default Component;
