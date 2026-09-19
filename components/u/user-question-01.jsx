import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/cxx-j6p5y.css';
import '../../css/q/qc92licjy.css';
import '../../css/o/ov-olib_p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="cxx-j6p5y"/><circle class="qc92licjy"/><path class="ov-olib_p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:user-question-01"} {...others} />);
}

export default Component;
