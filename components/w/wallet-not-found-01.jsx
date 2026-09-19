import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/busrn3bwc.css';
import '../../css/w/worcco0zv.css';
import '../../css/e/eswimnb4q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="busrn3bwc"/><path class="worcco0zv"/><path class="eswimnb4q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:wallet-not-found-01"} {...others} />);
}

export default Component;
