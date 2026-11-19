import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l5uu04isd.css';
import '../../css/l/l7_9pbbqq.css';
import '../../css/z/zph4utb2n.css';
import '../../css/g/g0d6c2bsm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="l5uu04isd"/><path class="l7_9pbbqq"/><path class="zph4utb2n"/><path class="g0d6c2bsm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:microphone-speaking"} {...others} />);
}

export default Component;
