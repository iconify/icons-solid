import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/wtc67qbno.css';
import '../../css/e/ekwamnsnd.css';
import '../../css/e/ep-8rwk8d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="wtc67qbno"/><circle class="ekwamnsnd"/><path class="ep-8rwk8d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:teaching"} {...others} />);
}

export default Component;
