import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mph5d6z2j.css';
import '../../css/b/bas90cbxo.css';
import '../../css/w/w80_64pdj.css';
import '../../css/w/wy8mnub5w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mph5d6z2j wm-k"/><path class="bas90cbxo wm-k"/><path class="w80_64pdj wm-k"/><path class="wm-shine wy8mnub5w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:circle"} {...others} />);
}

export default Component;
