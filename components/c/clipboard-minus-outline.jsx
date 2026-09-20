import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/agobzcc3y.css';
import '../../css/h/h4-tcib6f.css';
import '../../css/g/g_cdedu9n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="agobzcc3y"/><path class="h4-tcib6f"/><path class="g_cdedu9n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:clipboard-minus-outline"} {...others} />);
}

export default Component;
