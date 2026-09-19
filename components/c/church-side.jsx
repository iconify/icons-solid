import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/uekq65xzl.css';
import '../../css/h/h76v1xb1h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="uekq65xzl"/><path class="h76v1xb1h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:church-side"} {...others} />);
}

export default Component;
