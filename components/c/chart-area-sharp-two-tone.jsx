import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/p/pw7dqg-5z.css';
import '../../css/p/p53xcyb3q.css';
import '../../css/e/e5vqnab3e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="pw7dqg-5z"/><path class="p53xcyb3q"/><path class="e5vqnab3e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:chart-area-sharp-two-tone"} {...others} />);
}

export default Component;
