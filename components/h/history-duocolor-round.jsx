import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wpv1wrben.css';
import '../../css/u/u2858acpy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="wpv1wrben"/><path class="u2858acpy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:history-duocolor-round"} {...others} />);
}

export default Component;
