import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/t8a26skit.css';
import '../../css/p/pb9-u9byo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="t8a26skit"/><path class="pb9-u9byo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:keyhole-square"} {...others} />);
}

export default Component;
