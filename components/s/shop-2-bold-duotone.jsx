import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pnfj0ccni.css';
import '../../css/a/afkb6ib-h.css';
import '../../css/o/o7fvcgjso.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="pnfj0ccni"/><path class="afkb6ib-h"/><path clip-rule="evenodd" class="o7fvcgjso"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:shop-2-bold-duotone"} {...others} />);
}

export default Component;
