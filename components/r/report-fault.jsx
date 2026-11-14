import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/tz3lfhbgh.css';
import '../../css/s/s00tgrb-l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="tz3lfhbgh"/><path class="s00tgrb-l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"evicons:report-fault"} {...others} />);
}

export default Component;
