import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p7il8qmhh.css';
import '../../css/l/le910wibb.css';
import '../../css/t/t1nuh1b-w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="p7il8qmhh"/><circle transform="rotate(90 12 12)" class="le910wibb"/><path class="t1nuh1b-w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:crosshair"} {...others} />);
}

export default Component;
