import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o__tn2b4j.css';
import '../../css/l/l_eiac87f.css';
import '../../css/e/ek4t_vbai.css';
import '../../css/b/b01e3syqa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="o__tn2b4j"/><path class="l_eiac87f"/><rect class="ek4t_vbai"/><rect class="b01e3syqa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:trash-duotone"} {...others} />);
}

export default Component;
