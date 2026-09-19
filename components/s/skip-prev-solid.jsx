import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/xhm9ckc2y.css';
import '../../css/z/zty502bor.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="xhm9ckc2y"/><path class="zty502bor"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:skip-prev-solid"} {...others} />);
}

export default Component;
