import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b_x4g2bbc.css';
import '../../css/q/q_a5zcbnk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="b_x4g2bbc"/><path class="q_a5zcbnk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:percentage-10"} {...others} />);
}

export default Component;
