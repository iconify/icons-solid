import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nl0b44b0n.css';
import '../../css/y/ye1kmwbhc.css';
import '../../css/f/fjskp8bqk.css';
import '../../css/l/l8gxv0bho.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="nl0b44b0n"/><path class="ye1kmwbhc"/><path class="fjskp8bqk"/><path class="l8gxv0bho"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:pizza"} {...others} />);
}

export default Component;
