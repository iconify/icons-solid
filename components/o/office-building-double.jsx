import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7fmnlb4r.css';
import '../../css/z/zgtn1h70d.css';
import '../../css/d/d5yzqcc7q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="j7fmnlb4r"><path class="zgtn1h70d"/><path class="d5yzqcc7q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:office-building-double"} {...others} />);
}

export default Component;
