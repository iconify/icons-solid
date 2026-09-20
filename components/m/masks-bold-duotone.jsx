import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/imk632jdr.css';
import '../../css/r/r9srlcfrn.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/q/q0c5uqbol.css';
import '../../css/t/tw06w4bkl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="imk632jdr"/><path class="r9srlcfrn"/><g class="mc2zb0bvp"><path class="q0c5uqbol"/><path class="tw06w4bkl"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:masks-bold-duotone"} {...others} />);
}

export default Component;
