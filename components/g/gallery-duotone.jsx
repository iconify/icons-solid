import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i7tbtit9u.css';
import '../../css/i/idc33h8qs.css';
import '../../css/w/wb5s-abgo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="i7tbtit9u"/><path clip-rule="evenodd" class="idc33h8qs"/><path class="wb5s-abgo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:gallery-duotone"} {...others} />);
}

export default Component;
