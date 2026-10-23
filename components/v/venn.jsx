import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bl_l48dcr.css';
import '../../css/x/xog7ueb_e.css';
import '../../css/z/zqbo6tbma.css';
import '../../css/u/ugrd2cctn.css';
import '../../css/n/ngcjnj3ys.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><g clip-rule="evenodd" class="bl_l48dcr"><path class="xog7ueb_e"/><path class="zqbo6tbma"/></g><path class="ugrd2cctn"/><path class="ngcjnj3ys"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:venn"} {...others} />);
}

export default Component;
