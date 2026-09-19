import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/n0gob0b_z.css';
import '../../css/w/wis2p7bds.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="n0gob0b_z"/><path class="wis2p7bds"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:shopping-basket-check-in-01"} {...others} />);
}

export default Component;
