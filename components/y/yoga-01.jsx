import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/jd2h2j06p.css';
import '../../css/h/hz-zx75ja.css';
import '../../css/n/nw4278f5v.css';
import '../../css/o/oo7ooibyv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="jd2h2j06p"/><path class="hz-zx75ja"/><path class="nw4278f5v"/><path class="oo7ooibyv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:yoga-01"} {...others} />);
}

export default Component;
