import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/r/r5nyd_z6p.css';
import '../../css/l/lv86cgbir.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="r5nyd_z6p"/><path class="lv86cgbir"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:abt"} {...others} />);
}

export default Component;
