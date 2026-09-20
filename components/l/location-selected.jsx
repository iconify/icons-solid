import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/hsh_5n6zs.css';
import '../../css/d/d-76f3e8z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="hsh_5n6zs"/><path class="d-76f3e8z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:location-selected"} {...others} />);
}

export default Component;
