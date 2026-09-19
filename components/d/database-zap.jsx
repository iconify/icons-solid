import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/h_l78yaxm.css';
import '../../css/p/pvy_1nbjw.css';
import '../../css/u/ugb540alo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><ellipse class="h_l78yaxm"/><path class="pvy_1nbjw"/><path class="ugb540alo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:database-zap"} {...others} />);
}

export default Component;
