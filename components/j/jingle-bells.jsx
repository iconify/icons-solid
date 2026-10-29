import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/aobv9abrs.css';
import '../../css/i/i6z9qfeqt.css';
import '../../css/g/g15hn7bsm.css';
import '../../css/x/xx79rlbwp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="aobv9abrs wm-k"/><path class="i6z9qfeqt wm-a"/><path class="g15hn7bsm wm-s"/><path class="wm-s xx79rlbwp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:jingle-bells"} {...others} />);
}

export default Component;
