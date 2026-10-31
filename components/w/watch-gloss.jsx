import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/ds6iuybup.css';
import '../../css/i/iifkqexgr.css';
import '../../css/r/r0hj1ob5p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="ds6iuybup wm-k"/><path class="iifkqexgr wm-k"/><path class="r0hj1ob5p wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:watch-gloss"} {...others} />);
}

export default Component;
