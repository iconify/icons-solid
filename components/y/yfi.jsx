import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uz4j7qb2v.css';
import '../../css/m/md286fbip.css';
import '../../css/m/mftkw4boq.css';
import '../../css/e/ej3f_vktx.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><circle class="uz4j7qb2v"/><g class="md286fbip"><path class="mftkw4boq"/><path class="ej3f_vktx"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:yfi"} {...others} />);
}

export default Component;
