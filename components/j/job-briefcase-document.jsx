import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/l/lezyyqbrb.css';
import '../../css/y/yfyu5b4ac.css';
import '../../css/r/rhuwopb-f.css';
import '../../css/s/sw0djkbmk.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="lezyyqbrb"/><path class="yfyu5b4ac"/><path class="rhuwopb-f"/><path class="sw0djkbmk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:job-briefcase-document"} {...others} />);
}

export default Component;
