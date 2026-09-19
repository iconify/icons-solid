import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/m0lddebws.css';
import '../../css/t/tox0_487f.css';
import '../../css/w/w-urnk1wg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="m0lddebws"/><path clip-rule="evenodd" class="tox0_487f"/><path class="w-urnk1wg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:flower-01"} {...others} />);
}

export default Component;
