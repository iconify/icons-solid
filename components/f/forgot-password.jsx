import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/cno_kybgn.css';
import '../../css/a/aqdmquwpe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="cno_kybgn"/><path class="aqdmquwpe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:forgot-password"} {...others} />);
}

export default Component;
