import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/un-u7jjsi.css';
import '../../css/n/n8w9nlbwd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="un-u7jjsi"/><path class="n8w9nlbwd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:union-horiz-alt"} {...others} />);
}

export default Component;
