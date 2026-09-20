import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uvlcr55vq.css';
import '../../css/a/auhoknbvi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="uvlcr55vq"/><path class="auhoknbvi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:cast"} {...others} />);
}

export default Component;
