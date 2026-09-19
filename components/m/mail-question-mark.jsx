import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/er_8fkb_v.css';
import '../../css/b/b4fopkour.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="er_8fkb_v"/><path class="b4fopkour"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mail-question-mark"} {...others} />);
}

export default Component;
