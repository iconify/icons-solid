import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/e9_jq6eps.css';
import '../../css/o/ouxj-bgey.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="e9_jq6eps"/><path class="ouxj-bgey"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:square-plus"} {...others} />);
}

export default Component;
