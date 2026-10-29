import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/fmncyfc7f.css';
import '../../css/l/loqvx9bru.css';
import '../../css/j/js7dzdb1b.css';
import '../../css/w/wg1teybho.css';
import '../../css/e/elay6zb7q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="fmncyfc7f wm-k"/><path class="loqvx9bru wm-s"/><path class="js7dzdb1b"/><path class="wg1teybho"/><path class="elay6zb7q wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:clipboard-pen"} {...others} />);
}

export default Component;
