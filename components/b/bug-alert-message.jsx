import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/q/q_w4odb-d.css';
import '../../css/s/sgz7esb3w.css';
import '../../css/a/ad1418b5h.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="q_w4odb-d"/><path class="sgz7esb3w"/><path class="ad1418b5h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:bug-alert-message"} {...others} />);
}

export default Component;
