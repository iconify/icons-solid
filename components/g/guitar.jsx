import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y81lxi9mq.css';
import '../../css/h/hnn33mbck.css';
import '../../css/f/fbh52zsss.css';
import '../../css/a/azd7eibrn.css';
import '../../css/d/dziomlb8a.css';
import '../../css/z/zxx7xobct.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="y81lxi9mq"/><path class="hnn33mbck"/><circle transform="rotate(45 9.69 14.49)" class="fbh52zsss"/><path class="azd7eibrn"/><rect transform="rotate(45 6.82 28.9)scale(-1 1)" class="dziomlb8a"/><rect transform="rotate(45 7.02 29.26)scale(-1 1)" class="zxx7xobct"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:guitar"} {...others} />);
}

export default Component;
