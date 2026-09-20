import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/pc34gub7p.css';
import '../../css/b/bw9-ndn3k.css';
import '../../css/i/iqxj8ubdl.css';
import '../../css/q/qw-_nn3un.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path clip-rule="evenodd" class="pc34gub7p"/><path class="bw9-ndn3k"/><path class="iqxj8ubdl"/><path class="qw-_nn3un"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:ai360-360"} {...others} />);
}

export default Component;
