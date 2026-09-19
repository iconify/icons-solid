import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/pa4jbtn7i.css';
import '../../css/f/fs98lf4cp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="pa4jbtn7i"/><path class="fs98lf4cp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:notification-block-03"} {...others} />);
}

export default Component;
