import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ypxu-5b5i.css';
import '../../css/f/f6z_ndbaz.css';
import '../../css/n/n-ot9ub2j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ypxu-5b5i"/><path class="f6z_ndbaz"/><path class="n-ot9ub2j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:ev-charger-duotone"} {...others} />);
}

export default Component;
