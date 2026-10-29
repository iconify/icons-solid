import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sg-xjhbbo.css';
import '../../css/v/v6s4f8d8b.css';
import '../../css/t/t2-hi4bhh.css';
import '../../css/w/wy6k9g-li.css';
import '../../css/o/ormozvrbp.css';
import '../../css/d/dty2ejbym.css';
import '../../css/o/o8t-pqbzh.css';
import '../../css/l/l3f5xrbbt.css';
import '../../css/h/hryi9ab0s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="sg-xjhbbo wm-shadow"/><path class="v6s4f8d8b wm-shadow"/><path class="t2-hi4bhh"/><path class="wy6k9g-li"/><path class="ormozvrbp"/><path class="dty2ejbym"/><path class="o8t-pqbzh wm-shine"/><path class="l3f5xrbbt wm-shine"/><path class="hryi9ab0s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:chevrons-down"} {...others} />);
}

export default Component;
