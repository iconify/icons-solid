import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/y-t9991ny.css';
import '../../css/u/u-idn-bit.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="y-t9991ny"/><path class="u-idn-bit"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:dumbbells-linear"} {...others} />);
}

export default Component;
