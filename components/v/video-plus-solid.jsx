import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/gcovwxb8m.css';
import '../../css/m/m0-rokbhg.css';
import '../../css/z/zm4nneb0e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="gcovwxb8m"/><path class="m0-rokbhg wm-a"/><path class="wm-s zm4nneb0e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:video-plus-solid"} {...others} />);
}

export default Component;
