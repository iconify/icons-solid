import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/h-45hewkj.css';
import '../../css/r/rsq1ex_ur.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="h-45hewkj wm-k"/><path class="rsq1ex_ur wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:wind-gloss"} {...others} />);
}

export default Component;
