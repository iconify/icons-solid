import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/a/a8xel1b0w.css';
import '../../css/x/xyxipfb_h.css';
import '../../css/b/btvmlsfwv.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="a8xel1b0w"/><path class="xyxipfb_h"/><path class="btvmlsfwv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:download-harddrive-1"} {...others} />);
}

export default Component;
