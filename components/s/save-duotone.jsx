import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/btvsvz3yg.css';
import '../../css/h/hcyue85ei.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="btvsvz3yg secondary"/><path class="hcyue85ei primary"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:save-duotone"} {...others} />);
}

export default Component;
