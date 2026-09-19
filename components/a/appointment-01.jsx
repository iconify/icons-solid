import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/p3yq3u9df.css';
import '../../css/u/u-wu5bcsm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="p3yq3u9df"/><path class="u-wu5bcsm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:appointment-01"} {...others} />);
}

export default Component;
