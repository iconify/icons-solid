import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/kk20s_bdt.css';
import '../../css/g/g-rv0hbje.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="kk20s_bdt"/><path class="g-rv0hbje"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:authorized"} {...others} />);
}

export default Component;
