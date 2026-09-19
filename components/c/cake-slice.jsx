import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/bnef_pb8w.css';
import '../../css/n/n2wyxqbbe.css';
import '../../css/f/f6r1adbsy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><circle class="bnef_pb8w"/><path class="n2wyxqbbe"/><path class="f6r1adbsy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:cake-slice"} {...others} />);
}

export default Component;
