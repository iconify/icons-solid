import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/xvfjjxbtd.css';
import '../../css/v/vrq-bdbyc.css';
import '../../css/v/v7lcw7jtd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="xvfjjxbtd"/><path class="vrq-bdbyc"/><path class="v7lcw7jtd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:cable"} {...others} />);
}

export default Component;
