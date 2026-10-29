import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/f2k2fsr4e.css';
import '../../css/c/clkkgpbwe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="f2k2fsr4e"/><path class="clkkgpbwe wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:brain-cog-solid"} {...others} />);
}

export default Component;
