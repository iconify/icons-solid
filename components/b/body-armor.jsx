import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/q919yeb8u.css';
import '../../css/w/wayrhob7k.css';
import '../../css/x/xb7vlqboe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="q919yeb8u"/><path class="wayrhob7k"/><path class="xb7vlqboe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:body-armor"} {...others} />);
}

export default Component;
