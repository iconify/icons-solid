import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/p9-zrkb4g.css';
import '../../css/j/j9iij0brn.css';
import '../../css/y/yy7itxbbs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="p9-zrkb4g"/><path class="j9iij0brn"/><path class="yy7itxbbs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:global"} {...others} />);
}

export default Component;
