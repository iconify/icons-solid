import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ux74qwboi.css';
import '../../css/x/xb0nlibbh.css';
import '../../css/d/dkum40bst.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ux74qwboi"/><path class="xb0nlibbh"/><path class="dkum40bst"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:razor"} {...others} />);
}

export default Component;
