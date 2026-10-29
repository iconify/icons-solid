import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/nzv9h4bes.css';
import '../../css/n/nsrfhnewv.css';
import '../../css/c/cxo62_b3f.css';
import '../../css/t/tccumkb6l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="nzv9h4bes"/><path class="nsrfhnewv"/><path class="cxo62_b3f"/><path class="tccumkb6l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:mushroom"} {...others} />);
}

export default Component;
