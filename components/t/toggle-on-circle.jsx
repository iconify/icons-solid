import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/rbnr4p1ic.css';
import '../../css/k/kqd9kib1x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="rbnr4p1ic"/><path class="kqd9kib1x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:toggle-on-circle"} {...others} />);
}

export default Component;
