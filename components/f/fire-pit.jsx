import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/rth5cebwd.css';
import '../../css/t/tq0hxla5z.css';
import '../../css/r/rq45kidda.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="rth5cebwd"/><path class="tq0hxla5z"/><path class="rq45kidda"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:fire-pit"} {...others} />);
}

export default Component;
