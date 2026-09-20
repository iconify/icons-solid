import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nr5tlcjmx.css';
import '../../css/p/pyo1-abxx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="nr5tlcjmx"/><path class="pyo1-abxx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:mailbox"} {...others} />);
}

export default Component;
