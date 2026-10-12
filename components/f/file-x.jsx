import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q_x-rbbvj.css';
import '../../css/i/ixe34dbmo.css';
import '../../css/r/riuv0svnh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="q_x-rbbvj"/><path class="ixe34dbmo"/><path class="riuv0svnh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-x"} {...others} />);
}

export default Component;
