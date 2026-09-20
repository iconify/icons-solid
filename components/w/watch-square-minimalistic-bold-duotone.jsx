import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fqtfdwbms.css';
import '../../css/e/e024s-boh.css';
import '../../css/n/n0fkizyoa.css';
import '../../css/d/da1831clg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="fqtfdwbms"/><path class="e024s-boh"/><path class="n0fkizyoa"/><path class="da1831clg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:watch-square-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
