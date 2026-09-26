import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rxzy99kos.css';
import '../../css/n/nphvxqb8a.css';
import '../../css/k/k7c0ktjdy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="rxzy99kos"/><path class="nphvxqb8a"/><path class="k7c0ktjdy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:phone-calling-bold"} {...others} />);
}

export default Component;
