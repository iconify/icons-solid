import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/sg3ym4bwi.css';
import '../../css/f/f9l-rs01r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="sg3ym4bwi"/><path class="f9l-rs01r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:course-down-line-duotone"} {...others} />);
}

export default Component;
