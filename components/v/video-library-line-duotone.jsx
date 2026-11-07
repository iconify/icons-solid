import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yh6hz8b9k.css';
import '../../css/a/as51hubfp.css';
import '../../css/h/h477q4bel.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="yh6hz8b9k"/><path class="as51hubfp"/><path class="h477q4bel"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:video-library-line-duotone"} {...others} />);
}

export default Component;
