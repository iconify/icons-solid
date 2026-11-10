import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e19a_dp4p.css';
import '../../css/s/s8axfuxxx.css';
import '../../css/z/znrwibbsy.css';
import '../../css/z/ze-jfxgpg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="e19a_dp4p"/><path class="s8axfuxxx"/><path class="znrwibbsy"/><path class="ze-jfxgpg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:folder-refresh"} {...others} />);
}

export default Component;
