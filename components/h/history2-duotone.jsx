import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qj03rcbch.css';
import '../../css/q/q504gelvl.css';
import '../../css/p/p9xc8ybqi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="qj03rcbch"/><path clip-rule="evenodd" class="q504gelvl"/><path class="p9xc8ybqi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:history2-duotone"} {...others} />);
}

export default Component;
