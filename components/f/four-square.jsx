import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dz5hr8fgm.css';
import '../../css/f/fpuyb9bst.css';
import '../../css/w/w71_6zn9c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 21.31 21.58)" class="dz5hr8fgm"/><rect transform="matrix(0 -1 -1 0 21.31 21.58)" class="fpuyb9bst"/><path class="w71_6zn9c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:four-square"} {...others} />);
}

export default Component;
