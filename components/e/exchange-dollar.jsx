import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/kwj6kkx9i.css';
import '../../css/k/khfhn220m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="kwj6kkx9i"/><path class="khfhn220m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:exchange-dollar"} {...others} />);
}

export default Component;
