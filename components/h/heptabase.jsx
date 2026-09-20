import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dr_ae7pfe.css';
import '../../css/q/q_8yrbgax.css';
import '../../css/f/fr_kudi1b.css';

const viewBox = {"width":824,"height":824};
const content = `<g class="ft5dv1b6b"><rect class="dr_ae7pfe"/><circle class="q_8yrbgax"/><path clip-rule="evenodd" class="fr_kudi1b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:heptabase"} {...others} />);
}

export default Component;
