import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yck-3c46d.css';
import '../../css/s/s63kf5h6o.css';
import '../../css/y/ysd9pyvtr.css';
import '../../css/g/g4xa0cbln.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="yck-3c46d"/><path class="s63kf5h6o"/><circle class="ysd9pyvtr"/><path class="g4xa0cbln"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:speaker"} {...others} />);
}

export default Component;
