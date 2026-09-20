import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qd4wafbbv.css';
import '../../css/l/lwpz82cdv.css';
import '../../css/x/xi-jxcbdc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="qd4wafbbv"/><path class="lwpz82cdv"/><path class="xi-jxcbdc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:mobile-programming"} {...others} />);
}

export default Component;
