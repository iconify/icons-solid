import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/z1k_-1b8m.css';
import '../../css/a/au49bsasu.css';
import '../../css/e/eoiwwh5op.css';
import '../../css/c/cg8l8si9s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="z1k_-1b8m"/><path class="au49bsasu"/><path class="eoiwwh5op"/><path class="cg8l8si9s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:watch"} {...others} />);
}

export default Component;
