import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/joa7gb-zd.css';
import '../../css/i/ifv3rhb3l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="joa7gb-zd"/><path class="ifv3rhb3l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:tap-06"} {...others} />);
}

export default Component;
