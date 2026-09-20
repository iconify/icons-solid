import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/s/sxqdjn4bw.css';
import '../../css/b/b1y6_yydg.css';
import '../../css/t/t-jkcpb1d.css';
import '../../css/f/fl55ggdds.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="sxqdjn4bw"/><path class="b1y6_yydg"/><path class="t-jkcpb1d"/><path class="fl55ggdds"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:mortarboard-alt-2"} {...others} />);
}

export default Component;
