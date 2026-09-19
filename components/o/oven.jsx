import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qmgwshmqq.css';
import '../../css/c/ck59up55h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="qmgwshmqq"/><path class="ck59up55h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:oven"} {...others} />);
}

export default Component;
