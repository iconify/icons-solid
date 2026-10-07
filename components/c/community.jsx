import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qrrhsib-t.css';
import '../../css/z/ziro3hb8p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="qrrhsib-t"/><path class="ziro3hb8p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:community"} {...others} />);
}

export default Component;
