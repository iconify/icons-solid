import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/zb1m9tbsf.css';
import '../../css/b/byagrhoub.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="zb1m9tbsf"/><path class="byagrhoub"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:log-in"} {...others} />);
}

export default Component;
