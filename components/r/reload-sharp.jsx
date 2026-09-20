import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d__305b4d.css';
import '../../css/e/ellgwfopr.css';
import '../../css/f/fr0aq1ayq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="d__305b4d"/><path class="ellgwfopr"/><path class="fr0aq1ayq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:reload-sharp"} {...others} />);
}

export default Component;
