import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aq80l8t6g.css';
import '../../css/i/i1418haol.css';
import '../../css/b/bc5-xubfs.css';
import '../../css/p/p-j1o_b2k.css';
import '../../css/a/a6l50ebrv.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="aq80l8t6g"/><path class="i1418haol"/><g class="bc5-xubfs"><path class="p-j1o_b2k"/><path class="a6l50ebrv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:browncoat-flag"} {...others} />);
}

export default Component;
