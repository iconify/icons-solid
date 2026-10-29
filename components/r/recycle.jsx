import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/bi1v6bb7h.css';
import '../../css/r/rt2nribcm.css';
import '../../css/k/klvcus7uw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="bi1v6bb7h"/><path class="rt2nribcm"/><path class="klvcus7uw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:recycle"} {...others} />);
}

export default Component;
