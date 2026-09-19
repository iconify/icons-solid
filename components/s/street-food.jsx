import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/e0qz7_bcn.css';
import '../../css/v/vpdhrsb9k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="e0qz7_bcn"/><path class="vpdhrsb9k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:street-food"} {...others} />);
}

export default Component;
