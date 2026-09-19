import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/ys_zhewgg.css';
import '../../css/j/jcat81bta.css';
import '../../css/x/xmh7xxbak.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ys_zhewgg"/><path class="jcat81bta"/><path class="xmh7xxbak"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:baby-boy-dress"} {...others} />);
}

export default Component;
