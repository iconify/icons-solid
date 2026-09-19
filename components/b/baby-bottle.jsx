import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/r9j_lbbqt.css';
import '../../css/t/tpcok78oa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="r9j_lbbqt"/><path class="tpcok78oa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:baby-bottle"} {...others} />);
}

export default Component;
