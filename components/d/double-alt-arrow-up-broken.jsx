import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/k32cqsb-b.css';
import '../../css/m/msvkvmbbw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="k32cqsb-b"/><path class="msvkvmbbw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:double-alt-arrow-up-broken"} {...others} />);
}

export default Component;
