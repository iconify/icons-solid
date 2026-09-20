import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s-n5w8zgc.css';
import '../../css/q/q9gt3cbsu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="s-n5w8zgc"/><path class="q9gt3cbsu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:gift-card"} {...others} />);
}

export default Component;
