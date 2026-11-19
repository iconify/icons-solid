import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pfwq0kb9t.css';
import '../../css/d/dxpnt46bu.css';
import '../../css/l/lqxtledjz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="pfwq0kb9t"/><path class="dxpnt46bu"/><path class="lqxtledjz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:beer-off"} {...others} />);
}

export default Component;
