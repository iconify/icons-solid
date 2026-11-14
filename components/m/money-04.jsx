import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/gizxvtbsy.css';
import '../../css/e/exv6zmb5k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="gizxvtbsy"/><path class="exv6zmb5k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:money-04"} {...others} />);
}

export default Component;
