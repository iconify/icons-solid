import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/k6kugdc8h.css';
import '../../css/h/hlpduac0z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="k6kugdc8h"/><path class="hlpduac0z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:bug"} {...others} />);
}

export default Component;
