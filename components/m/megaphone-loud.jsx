import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/klmgxwicg.css';
import '../../css/t/t8jbi9bgw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="klmgxwicg"/><path class="t8jbi9bgw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:megaphone-loud"} {...others} />);
}

export default Component;
