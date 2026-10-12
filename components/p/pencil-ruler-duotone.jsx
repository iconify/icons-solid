import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n3kc-ox6s.css';
import '../../css/g/g1hcxlfvl.css';
import '../../css/s/sjgfxfb6j.css';
import '../../css/u/uo9nlgbgx.css';
import '../../css/u/uyhdqmb_m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="n3kc-ox6s"/><path class="g1hcxlfvl"/><path class="sjgfxfb6j"/><path class="uo9nlgbgx"/><path class="uyhdqmb_m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:pencil-ruler-duotone"} {...others} />);
}

export default Component;
