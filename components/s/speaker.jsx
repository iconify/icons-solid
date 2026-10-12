import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ax2b285us.css';
import '../../css/p/pc5g81b3t.css';
import '../../css/y/ysd9pyvtr.css';
import '../../css/g/g4xa0cbln.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ax2b285us"/><rect class="pc5g81b3t"/><circle class="ysd9pyvtr"/><path class="g4xa0cbln"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:speaker"} {...others} />);
}

export default Component;
