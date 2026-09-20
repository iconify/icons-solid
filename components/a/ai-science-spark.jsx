import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/tl2ij-fui.css';
import '../../css/f/f8am6qb0g.css';
import '../../css/z/zjwu41b8q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="tl2ij-fui"/><path class="f8am6qb0g"/><path class="zjwu41b8q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:ai-science-spark"} {...others} />);
}

export default Component;
