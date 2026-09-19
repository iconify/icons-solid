import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/rx79owipl.css';
import '../../css/j/jts7syarj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="rx79owipl"/><path class="jts7syarj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:copy-01"} {...others} />);
}

export default Component;
