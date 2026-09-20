import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/npv9m71la.css';
import '../../css/f/fkksm04zo.css';
import '../../css/y/y4_l99bdm.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="npv9m71la"/><path clip-rule="evenodd" class="fkksm04zo"/><path clip-rule="evenodd" class="y4_l99bdm"/><path class="mo5netbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:question-off"} {...others} />);
}

export default Component;
