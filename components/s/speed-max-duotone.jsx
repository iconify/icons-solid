import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dfg4lce1g.css';
import '../../css/o/o-d4_abqi.css';
import '../../css/y/yarsf9bbx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="dfg4lce1g"/><path class="o-d4_abqi"/><path class="yarsf9bbx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:speed-max-duotone"} {...others} />);
}

export default Component;
