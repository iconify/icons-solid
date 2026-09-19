import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/e7h30lwyy.css';
import '../../css/b/by0inuboi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="e7h30lwyy"/><path class="by0inuboi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:flip-right"} {...others} />);
}

export default Component;
