import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/ghuwk6bys.css';
import '../../css/a/ahi4awbnp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ghuwk6bys"/><path class="ahi4awbnp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:calendar-upload-01"} {...others} />);
}

export default Component;
