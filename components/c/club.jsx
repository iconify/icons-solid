import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/eedy2_2_u.css';
import '../../css/j/jyg2dbbxi.css';
import '../../css/d/d69r_jv7v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="eedy2_2_u"/><path class="jyg2dbbxi"/><path class="d69r_jv7v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:club"} {...others} />);
}

export default Component;
