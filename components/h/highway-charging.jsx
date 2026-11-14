import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/nudhr_x9i.css';
import '../../css/p/pjsa-gb0i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="nudhr_x9i"/><path class="pjsa-gb0i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"evicons:highway-charging"} {...others} />);
}

export default Component;
