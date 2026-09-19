import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mf7qbhltw.css';
import '../../css/j/jhr_5uwxu.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="mf7qbhltw"/><path class="jhr_5uwxu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:coffee-machine"} {...others} />);
}

export default Component;
