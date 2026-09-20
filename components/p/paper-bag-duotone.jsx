import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wb4sbpb5g.css';
import '../../css/y/ysa1ox65n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="wb4sbpb5g"/><path clip-rule="evenodd" class="ysa1ox65n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:paper-bag-duotone"} {...others} />);
}

export default Component;
