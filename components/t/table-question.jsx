import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/e0v-75b3u.css';
import '../../css/j/jurinlblr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="e0v-75b3u"/><path class="jurinlblr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:table-question"} {...others} />);
}

export default Component;
