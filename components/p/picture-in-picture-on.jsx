import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jhu24nmxs.css';
import '../../css/j/jf2n-qjhh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="jhu24nmxs"/><path class="jf2n-qjhh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:picture-in-picture-on"} {...others} />);
}

export default Component;
