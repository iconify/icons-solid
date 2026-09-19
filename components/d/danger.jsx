import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/k_we9dbkd.css';
import '../../css/q/qvv9bdbon.css';
import '../../css/n/n7lafqbhi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="k_we9dbkd"/><path class="qvv9bdbon"/><path class="n7lafqbhi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:danger"} {...others} />);
}

export default Component;
