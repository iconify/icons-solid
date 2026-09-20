import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f0f3iibjg.css';
import '../../css/t/twivc3g-w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="f0f3iibjg"/><path class="twivc3g-w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:monitor-off-two-tone"} {...others} />);
}

export default Component;
