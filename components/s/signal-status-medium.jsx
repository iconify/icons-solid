import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqarxwb2p.css';
import '../../css/c/ctpgc-b-l.css';
import '../../css/c/cbgocdc0d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="fqarxwb2p"/><rect transform="matrix(-1 0 0 1 14.12 8.3)" class="ctpgc-b-l"/><rect transform="matrix(-1 0 0 1 7 13.36)" class="cbgocdc0d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:signal-status-medium"} {...others} />);
}

export default Component;
