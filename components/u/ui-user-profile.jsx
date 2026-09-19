import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w2z0u8dqq.css';
import '../../css/l/ledamjbfx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="w2z0u8dqq"/><path clip-rule="evenodd" class="ledamjbfx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:ui-user-profile"} {...others} />);
}

export default Component;
