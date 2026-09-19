import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/fx7c7xj_y.css';
import '../../css/k/k-9ubd0cn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="fx7c7xj_y"/><path class="k-9ubd0cn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:waiter"} {...others} />);
}

export default Component;
