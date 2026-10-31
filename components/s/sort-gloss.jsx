import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rye0_cw1g.css';
import '../../css/i/iv082wqfl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="rye0_cw1g wm-k"/><path class="iv082wqfl wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:sort-gloss"} {...others} />);
}

export default Component;
