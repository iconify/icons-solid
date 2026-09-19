import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/i76-0zyzg.css';
import '../../css/n/n7m4jv-wg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="i76-0zyzg"/><path class="n7m4jv-wg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:magnet"} {...others} />);
}

export default Component;
