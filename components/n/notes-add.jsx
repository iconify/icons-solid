import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/ru94hfg8j.css';
import '../../css/l/lv1-rx6tk.css';
import '../../css/q/q2ossk_gv.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ru94hfg8j"/><path class="lv1-rx6tk"/><path class="q2ossk_gv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:notes-add"} {...others} />);
}

export default Component;
