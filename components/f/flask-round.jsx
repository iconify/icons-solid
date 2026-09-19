import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/m3w2f4d-q.css';
import '../../css/x/xb8qf9boi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="m3w2f4d-q"/><path class="xb8qf9boi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:flask-round"} {...others} />);
}

export default Component;
