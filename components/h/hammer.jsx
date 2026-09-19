import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/kf0za8h7v.css';
import '../../css/c/c9zcsoujm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="kf0za8h7v"/><path class="c9zcsoujm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:hammer"} {...others} />);
}

export default Component;
