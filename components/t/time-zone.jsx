import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/rbwa6_bla.css';
import '../../css/e/e6xfr6chp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="rbwa6_bla"/><path class="e6xfr6chp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:time-zone"} {...others} />);
}

export default Component;
