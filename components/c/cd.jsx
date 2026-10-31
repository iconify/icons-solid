import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vcize2b6m.css';
import '../../css/j/jaamzibxs.css';
import '../../css/b/bqdcxhbpg.css';

const viewBox = {"width":301,"height":225};
const content = `<g class="ft5dv1b6b"><path class="vcize2b6m"/><path class="jaamzibxs"/><path class="bqdcxhbpg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:cd"} {...others} />);
}

export default Component;
