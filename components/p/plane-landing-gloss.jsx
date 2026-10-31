import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/s797cwbdo.css';
import '../../css/v/vc30dabbb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="s797cwbdo wm-k"/><path class="vc30dabbb wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:plane-landing-gloss"} {...others} />);
}

export default Component;
