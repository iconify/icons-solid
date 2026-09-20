import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/id_dkzbpx.css';
import '../../css/b/by1hc2n7w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="id_dkzbpx"/><path class="by1hc2n7w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:braces-linear"} {...others} />);
}

export default Component;
