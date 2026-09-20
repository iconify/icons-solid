import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q1ugeuw_g.css';
import '../../css/u/ug3_-lb-e.css';
import '../../css/s/s5stddcrx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="q1ugeuw_g"/><path class="ug3_-lb-e"/><path class="s5stddcrx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:webhook"} {...others} />);
}

export default Component;
