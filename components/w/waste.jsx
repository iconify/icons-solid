import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/m2t2tibol.css';
import '../../css/j/j4ch19him.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="m2t2tibol"/><path class="j4ch19him"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:waste"} {...others} />);
}

export default Component;
