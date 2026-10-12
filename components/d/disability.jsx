import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w0bejgr8a.css';
import '../../css/q/q38t0ccje.css';
import '../../css/x/xtah66b9b.css';
import '../../css/a/ao27dv7-j.css';
import '../../css/o/oqr3w3gyj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="w0bejgr8a"/><circle class="q38t0ccje"/><path class="xtah66b9b"/><circle class="ao27dv7-j"/><path class="oqr3w3gyj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:disability"} {...others} />);
}

export default Component;
