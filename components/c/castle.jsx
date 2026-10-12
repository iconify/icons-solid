import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jpxo5wbuf.css';
import '../../css/s/s7thl-blk.css';
import '../../css/h/h88n45bfw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="jpxo5wbuf"/><path class="s7thl-blk"/><path class="h88n45bfw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:castle"} {...others} />);
}

export default Component;
