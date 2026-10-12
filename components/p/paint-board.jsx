import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ah42bqb-l.css';
import '../../css/q/q-xx5ioed.css';
import '../../css/u/uyw8ogbgs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ah42bqb-l"/><path class="q-xx5ioed"/><path class="uyw8ogbgs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:paint-board"} {...others} />);
}

export default Component;
