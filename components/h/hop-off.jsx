import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/v6q_qjexq.css';
import '../../css/h/hoi-qpbgk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="v6q_qjexq"/><path class="hoi-qpbgk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:hop-off"} {...others} />);
}

export default Component;
