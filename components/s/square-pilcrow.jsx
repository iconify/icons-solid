import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/utio7toaw.css';
import '../../css/e/e9_jq6eps.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="utio7toaw"/><path class="e9_jq6eps"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:square-pilcrow"} {...others} />);
}

export default Component;
