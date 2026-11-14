import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/f6730qbkb.css';
import '../../css/r/rkyv0zbjs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="f6730qbkb"/><path class="rkyv0zbjs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:award-01"} {...others} />);
}

export default Component;
