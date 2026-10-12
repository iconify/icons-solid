import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uo4a29mkc.css';
import '../../css/d/dyhwsbgkq.css';
import '../../css/b/bpojjymce.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="uo4a29mkc"/><path class="dyhwsbgkq"/><path class="bpojjymce"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:volcano"} {...others} />);
}

export default Component;
