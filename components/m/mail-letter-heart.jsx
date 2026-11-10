import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nfygc21au.css';
import '../../css/g/glfxmynsd.css';
import '../../css/j/j5qj9accq.css';
import '../../css/z/z31kbip8e.css';
import '../../css/i/iqrmk5p8o.css';
import '../../css/j/ja2vm6bhg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="nfygc21au"/><path class="glfxmynsd"/><path class="j5qj9accq"/><path class="z31kbip8e"/><path class="iqrmk5p8o"/><path class="ja2vm6bhg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:mail-letter-heart"} {...others} />);
}

export default Component;
