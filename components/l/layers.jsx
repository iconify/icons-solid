import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/u/u_s1wbbnd.css';
import '../../css/w/wiwxagn1a.css';
import '../../css/i/imc6ke7aq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="u_s1wbbnd"/><path class="wiwxagn1a"/><path class="imc6ke7aq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:layers"} {...others} />);
}

export default Component;
