import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hv49szwvm.css';
import '../../css/d/dc6l11v-t.css';
import '../../css/o/okb9v7bex.css';
import '../../css/x/xuj0x92pg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hv49szwvm"/><path class="dc6l11v-t"/><path class="okb9v7bex"/><path class="xuj0x92pg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:mcp"} {...others} />);
}

export default Component;
