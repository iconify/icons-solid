import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pti0akbdb.css';
import '../../css/o/o6w7ekbub.css';
import '../../css/z/zkkco4b6x.css';
import '../../css/b/b7thxjbep.css';
import '../../css/h/h3y0vub_i.css';
import '../../css/z/zkplvy71h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="pti0akbdb wm-k"/><path class="o6w7ekbub wm-k"/><path class="wm-k zkkco4b6x"/><path class="b7thxjbep wm-k"/><path class="h3y0vub_i wm-shine"/><path class="wm-a zkplvy71h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:square-terminal"} {...others} />);
}

export default Component;
