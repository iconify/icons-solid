import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/guewfbcxi.css';
import '../../css/z/z9inlpfjq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="guewfbcxi"/><path class="z9inlpfjq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:settings"} {...others} />);
}

export default Component;
