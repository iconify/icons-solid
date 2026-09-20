import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t_jo4vfmb.css';
import '../../css/w/wo2y-d8wb.css';
import '../../css/u/uqb0yqbaw.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="t_jo4vfmb"/><path class="wo2y-d8wb"/><path clip-rule="evenodd" class="uqb0yqbaw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:microscope-observation-sciene-flat"} {...others} />);
}

export default Component;
