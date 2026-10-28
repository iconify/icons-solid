import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/i6kc7l_0v.css';
import '../../css/p/p2ls8evah.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="i6kc7l_0v"/><path class="p2ls8evah"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codex:home"} {...others} />);
}

export default Component;
