import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dwczlmuwa.css';
import '../../css/y/y71g5abmn.css';
import '../../css/a/a9-098b0t.css';
import '../../css/r/rywz0nbnk.css';
import '../../css/o/ogt6mdpoa.css';
import '../../css/c/cj32cwqpj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="dwczlmuwa"/><path class="y71g5abmn"/><path class="a9-098b0t"/><path class="rywz0nbnk"/><path class="ogt6mdpoa"/><path class="cj32cwqpj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:injection"} {...others} />);
}

export default Component;
