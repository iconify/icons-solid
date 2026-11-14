import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/di4ugvo9f.css';
import '../../css/f/ftp2xle1f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="di4ugvo9f"/><path class="ftp2xle1f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:stack-star"} {...others} />);
}

export default Component;
