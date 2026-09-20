import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/l-1p6_byc.css';
import '../../css/j/jp_jy4rod.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="l-1p6_byc"/><path class="jp_jy4rod"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:coding-apps-website-network-globe"} {...others} />);
}

export default Component;
