import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/lxhb0zbtf.css';
import '../../css/t/tk8yg_b-k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="lxhb0zbtf"/><path class="tk8yg_b-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:quote-broken"} {...others} />);
}

export default Component;
