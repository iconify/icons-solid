import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zwqgm0b6n.css';
import '../../css/k/ki5b-pb_s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="zwqgm0b6n"/><path class="ki5b-pb_s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:git-pull-request-locked-ai"} {...others} />);
}

export default Component;
