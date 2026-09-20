import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/omtfbmb6c.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/e/eub-owb9l.css';
import '../../css/k/kq-ytpe-e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="omtfbmb6c"/><g class="mc2zb0bvp"><path class="eub-owb9l"/><path class="kq-ytpe-e"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:rocket-bold-duotone"} {...others} />);
}

export default Component;
