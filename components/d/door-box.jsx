import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/heuu0yhhf.css';
import '../../css/w/w-sev8bli.css';
import '../../css/i/ivfgshkmb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="heuu0yhhf"/><path class="w-sev8bli"/><path class="ivfgshkmb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:door-box"} {...others} />);
}

export default Component;
