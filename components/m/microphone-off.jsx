import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z0u8z-cmu.css';
import '../../css/u/ubvdzxb7p.css';
import '../../css/b/bw9mfzbtf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 16.1 14.52)" class="z0u8z-cmu"/><path class="ubvdzxb7p"/><path class="bw9mfzbtf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:microphone-off"} {...others} />);
}

export default Component;
