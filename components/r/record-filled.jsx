import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jqhjtfbwd.css';
import '../../css/e/em2q9nb2p.css';
import '../../css/m/mb0g7k26v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="jqhjtfbwd"/><path class="em2q9nb2p"/><path class="mb0g7k26v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:record-filled"} {...others} />);
}

export default Component;
