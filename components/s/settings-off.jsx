import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/i5w9jbb0l.css';
import '../../css/j/jietwhjof.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="i5w9jbb0l"/><path class="jietwhjof"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:settings-off"} {...others} />);
}

export default Component;
