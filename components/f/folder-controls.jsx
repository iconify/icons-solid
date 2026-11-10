import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hglhznswv.css';
import '../../css/i/io8ey1b6c.css';
import '../../css/j/ji2eu13ia.css';
import '../../css/u/uf8-rcbtk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="hglhznswv"/><path class="io8ey1b6c"/><circle class="ji2eu13ia"/><circle class="uf8-rcbtk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:folder-controls"} {...others} />);
}

export default Component;
