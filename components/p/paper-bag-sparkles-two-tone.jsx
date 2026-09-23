import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s1a5rjwjp.css';
import '../../css/a/ai5f1achb.css';
import '../../css/w/wmmy0pb_j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="s1a5rjwjp"/><path class="ai5f1achb"/><path class="wmmy0pb_j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:paper-bag-sparkles-two-tone"} {...others} />);
}

export default Component;
