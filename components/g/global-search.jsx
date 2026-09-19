import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/ed3_dlb7r.css';
import '../../css/q/qg4l4xbso.css';
import '../../css/a/a6moqwkki.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ed3_dlb7r"/><path class="qg4l4xbso"/><path class="a6moqwkki"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:global-search"} {...others} />);
}

export default Component;
