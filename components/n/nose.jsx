import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/wwantbbhl.css';
import '../../css/q/q_-3n0glq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="wwantbbhl"/><path class="q_-3n0glq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:nose"} {...others} />);
}

export default Component;
