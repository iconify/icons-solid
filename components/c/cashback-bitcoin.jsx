import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/bz59jbv1a.css';
import '../../css/v/v8g9vfbqd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="bz59jbv1a"/><path class="v8g9vfbqd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:cashback-bitcoin"} {...others} />);
}

export default Component;
