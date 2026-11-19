import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hm3o83b0v.css';
import '../../css/p/p6m21qb0z.css';
import '../../css/l/l6-1ppbik.css';
import '../../css/l/l_p-62bbf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hm3o83b0v"/><path class="p6m21qb0z"/><path class="l6-1ppbik"/><path class="l_p-62bbf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:keyboard-right"} {...others} />);
}

export default Component;
