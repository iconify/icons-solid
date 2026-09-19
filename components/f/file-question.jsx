import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z-i1fsn1z.css';
import '../../css/x/xzfhtcs8o.css';
import '../../css/p/pyx_7bcip.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="z-i1fsn1z"/><path class="xzfhtcs8o"/><path clip-rule="evenodd" class="pyx_7bcip"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:file-question"} {...others} />);
}

export default Component;
