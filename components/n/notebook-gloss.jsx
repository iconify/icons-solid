import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/k584fccac.css';
import '../../css/u/u23wkf-tc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="k584fccac wm-k"/><path class="u23wkf-tc wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:notebook-gloss"} {...others} />);
}

export default Component;
