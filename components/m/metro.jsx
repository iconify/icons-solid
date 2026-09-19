import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/jr7-fdb9w.css';
import '../../css/r/rcg--6eak.css';
import '../../css/j/jzoz2c3ar.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="jr7-fdb9w"/><path class="rcg--6eak"/><path class="jzoz2c3ar"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:metro"} {...others} />);
}

export default Component;
