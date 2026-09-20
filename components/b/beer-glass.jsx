import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kk-tpibgy.css';
import '../../css/o/oeaecyb3h.css';
import '../../css/m/m6_s_5bvl.css';
import '../../css/o/oe-yszbsb.css';
import '../../css/b/bzm9d8q_q.css';
import '../../css/f/f1xi5020c.css';
import '../../css/s/sy-8iebzr.css';
import '../../css/g/guf07m-km.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kk-tpibgy"/><path class="oeaecyb3h"/><path class="m6_s_5bvl"/><path class="oe-yszbsb"/><path class="bzm9d8q_q"/><path class="f1xi5020c"/><path class="sy-8iebzr"/><path class="guf07m-km"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:beer-glass"} {...others} />);
}

export default Component;
