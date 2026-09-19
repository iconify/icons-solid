import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/osd40dbuo.css';
import '../../css/r/rz636hxgh.css';
import '../../css/j/jf0065b9d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="osd40dbuo"/><path class="rz636hxgh"/><path class="jf0065b9d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:duplex"} {...others} />);
}

export default Component;
