import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/f3w4d9kff.css';
import '../../css/n/nhv50tesc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="f3w4d9kff"/><path class="nhv50tesc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:vr-glasses"} {...others} />);
}

export default Component;
