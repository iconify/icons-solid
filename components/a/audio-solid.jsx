import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fk7zj1gsg.css';
import '../../css/k/kail4jbtw.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="fk7zj1gsg"/><path class="kail4jbtw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"rivet-icons:audio-solid"} {...others} />);
}

export default Component;
