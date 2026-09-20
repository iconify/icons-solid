import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/yu0oygb4t.css';
import '../../css/r/r6a20cbbd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="yu0oygb4t"/><path class="r6a20cbbd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:diagram-up-double"} {...others} />);
}

export default Component;
