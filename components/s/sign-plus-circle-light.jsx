import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/q07-vixib.css';
import '../../css/q/qkr8c8bcd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><circle class="q07-vixib"/><path class="qkr8c8bcd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:sign-plus-circle-light"} {...others} />);
}

export default Component;
