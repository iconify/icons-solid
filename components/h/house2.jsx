import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/lg-447b1o.css';
import '../../css/q/qijvpibrx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="lg-447b1o"/><path class="qijvpibrx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:house2"} {...others} />);
}

export default Component;
