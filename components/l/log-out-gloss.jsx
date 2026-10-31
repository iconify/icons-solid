import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/gjpqb1bif.css';
import '../../css/d/dge4tumgo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="gjpqb1bif wm-k"/><path class="dge4tumgo wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:log-out-gloss"} {...others} />);
}

export default Component;
