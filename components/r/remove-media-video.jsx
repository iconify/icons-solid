import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/r1eswfbpe.css';
import '../../css/z/zueruznly.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="r1eswfbpe"/><path class="zueruznly"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:remove-media-video"} {...others} />);
}

export default Component;
