import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/ebc0s5b5b.css';
import '../../css/o/o1m9srbef.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ebc0s5b5b"/><path class="o1m9srbef"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:alarm-clock"} {...others} />);
}

export default Component;
