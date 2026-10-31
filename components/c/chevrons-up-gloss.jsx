import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/o70fmfbfo.css';
import '../../css/n/n_sijcbqa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="o70fmfbfo wm-k"/><path class="n_sijcbqa wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chevrons-up-gloss"} {...others} />);
}

export default Component;
