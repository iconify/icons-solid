import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/bd77njbqt.css';
import '../../css/y/y__863ctc.css';
import '../../css/c/cv06d6bir.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="bd77njbqt"/><path class="y__863ctc"/><path class="cv06d6bir"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:algorithm"} {...others} />);
}

export default Component;
