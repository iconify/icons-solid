import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/n0ni1wbua.css';
import '../../css/m/mbuzo-xyr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="n0ni1wbua"/><path class="mbuzo-xyr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:hand-beater"} {...others} />);
}

export default Component;
