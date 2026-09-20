import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/sjsy5hbvt.css';
import '../../css/z/zdxa1wbga.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="sjsy5hbvt"/><path class="zdxa1wbga"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:comment-multiple"} {...others} />);
}

export default Component;
