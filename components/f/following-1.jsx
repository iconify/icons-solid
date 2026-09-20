import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/o9pn9_rbs.css';
import '../../css/w/wnmug3wbz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="o9pn9_rbs"/><path class="wnmug3wbz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:following-1"} {...others} />);
}

export default Component;
