import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hd09glbhk.css';
import '../../css/i/iodq_bcsa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="hd09glbhk"/><path class="iodq_bcsa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:headset-off-fill"} {...others} />);
}

export default Component;
