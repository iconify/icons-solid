import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eub-owb9l.css';
import '../../css/b/bnr386b3y.css';
import '../../css/o/omtfbmb6c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="eub-owb9l"/><path class="bnr386b3y"/><path clip-rule="evenodd" class="omtfbmb6c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:rocket-bold"} {...others} />);
}

export default Component;
