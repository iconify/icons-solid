import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jjs64fbrx.css';
import '../../css/q/q1yocybne.css';
import '../../css/o/o3lva51sv.css';
import '../../css/d/dab4yko7u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="jjs64fbrx"/><path clip-rule="evenodd" class="q1yocybne"/><path class="o3lva51sv"/><path clip-rule="evenodd" class="dab4yko7u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:server-cloud-duotone"} {...others} />);
}

export default Component;
