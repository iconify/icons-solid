import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q1rsaph5t.css';
import '../../css/r/rm932gbex.css';
import '../../css/r/rzpynubch.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="q1rsaph5t"/><path class="rm932gbex"/><path clip-rule="evenodd" class="rzpynubch"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:voice-id-smartphone"} {...others} />);
}

export default Component;
