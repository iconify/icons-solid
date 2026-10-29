import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/khn241bad.css';
import '../../css/n/npa4rgbjd.css';
import '../../css/l/ljcz9bcpj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><circle class="khn241bad"/><path class="npa4rgbjd"/><path class="ljcz9bcpj wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:user-pen-solid"} {...others} />);
}

export default Component;
