import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/l7-q7ybtu.css';
import '../../css/k/k9_v2nbgk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="l7-q7ybtu"/><path class="k9_v2nbgk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:glass"} {...others} />);
}

export default Component;
