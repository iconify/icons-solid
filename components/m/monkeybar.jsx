import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/m5fm4kbgt.css';
import '../../css/w/wqw6qcb3x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="m5fm4kbgt"/><path class="wqw6qcb3x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:monkeybar"} {...others} />);
}

export default Component;
