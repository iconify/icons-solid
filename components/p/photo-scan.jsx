import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/m5wyexbdh.css';
import '../../css/n/nnpdefp3e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="m5wyexbdh"/><path class="nnpdefp3e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:photo-scan"} {...others} />);
}

export default Component;
