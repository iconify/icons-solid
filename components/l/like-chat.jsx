import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/j0ehi_b6f.css';
import '../../css/r/r7ryixj9z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="j0ehi_b6f"/><path class="r7ryixj9z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:like-chat"} {...others} />);
}

export default Component;
