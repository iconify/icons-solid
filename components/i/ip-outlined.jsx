import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hv_l6fzvt.css';
import '../../css/r/rz8l7i1vb.css';
import '../../css/q/qixglcefr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hv_l6fzvt"/><path class="rz8l7i1vb"/><path class="qixglcefr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:ip-outlined"} {...others} />);
}

export default Component;
