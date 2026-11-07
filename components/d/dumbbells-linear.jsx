import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/def6o8boc.css';
import '../../css/b/bjy7ielyu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="def6o8boc"/><path class="bjy7ielyu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:dumbbells-linear"} {...others} />);
}

export default Component;
