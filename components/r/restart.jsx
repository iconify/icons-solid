import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/rez0umi3s.css';
import '../../css/r/r48nej5ns.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="rez0umi3s"/><path class="r48nej5ns"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:restart"} {...others} />);
}

export default Component;
