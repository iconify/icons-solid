import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/objfwp1iv.css';
import '../../css/a/ao1eykxlw.css';
import '../../css/h/hod5p82lh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="objfwp1iv"/><path class="ao1eykxlw"/><path class="hod5p82lh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:electric-tower-02"} {...others} />);
}

export default Component;
