import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/w81b3e94v.css';
import '../../css/w/w1ubgebig.css';
import '../../css/b/b433mt92k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="w81b3e94v"/><path class="w1ubgebig"/><path class="b433mt92k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:color-palette"} {...others} />);
}

export default Component;
