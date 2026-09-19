import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/c34_yxsgm.css';
import '../../css/y/yg14sg3ya.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="c34_yxsgm"/><circle class="yg14sg3ya"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:user-lock-01"} {...others} />);
}

export default Component;
