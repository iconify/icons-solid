import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/au_z8ub6r.css';
import '../../css/l/lrxb7jbcs.css';
import '../../css/u/uhpd7_0zc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="au_z8ub6r"/><path class="lrxb7jbcs"/><path class="uhpd7_0zc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:image-search"} {...others} />);
}

export default Component;
