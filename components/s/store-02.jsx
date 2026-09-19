import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/ca__wz0nr.css';
import '../../css/j/j266wlgmh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ca__wz0nr"/><path class="j266wlgmh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:store-02"} {...others} />);
}

export default Component;
