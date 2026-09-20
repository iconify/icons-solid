import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/llzedeb9t.css';
import '../../css/q/q_a5zcbnk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="llzedeb9t"/><path class="q_a5zcbnk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:time-duration-90"} {...others} />);
}

export default Component;
