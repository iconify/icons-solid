import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pm6qmwb1b.css';
import '../../css/s/s8axfuxxx.css';
import '../../css/z/znrwibbsy.css';
import '../../css/c/cj45a4cra.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="pm6qmwb1b"/><path class="s8axfuxxx"/><path class="znrwibbsy"/><path class="cj45a4cra"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:folder-refresh"} {...others} />);
}

export default Component;
