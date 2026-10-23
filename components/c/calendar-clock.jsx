import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nlnjivm0k.css';
import '../../css/n/ne97iz-kz.css';
import '../../css/w/w30fyozde.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="nlnjivm0k"/><path class="ne97iz-kz"/><path class="w30fyozde"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:calendar-clock"} {...others} />);
}

export default Component;
