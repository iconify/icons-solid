import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/i4r8utbbt.css';
import '../../css/o/oa4tt2b3g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="i4r8utbbt"/><path class="oa4tt2b3g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:page-flip"} {...others} />);
}

export default Component;
