import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vsxr0cbrw.css';
import '../../css/r/rxzdcmbsz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="vsxr0cbrw wm-k"/><path class="rxzdcmbsz wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:arrow-left-to-line-gloss"} {...others} />);
}

export default Component;
