import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d1c9d-bth.css';
import '../../css/b/b2mvo_bdu.css';
import '../../css/y/ypl-tsp9k.css';

const viewBox = {"width":301,"height":181};
const content = `<g class="ft5dv1b6b"><path class="d1c9d-bth"/><path class="b2mvo_bdu"/><path class="ypl-tsp9k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:lu"} {...others} />);
}

export default Component;
