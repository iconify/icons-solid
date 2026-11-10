import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gyluqvbcu.css';
import '../../css/t/tzr9dnbwb.css';
import '../../css/q/qoje3merg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gyluqvbcu"/><path class="tzr9dnbwb"/><path class="qoje3merg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:video-filled"} {...others} />);
}

export default Component;
