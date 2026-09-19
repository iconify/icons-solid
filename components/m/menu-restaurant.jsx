import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/h8lx4jp1g.css';
import '../../css/k/kylvk9lcu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="h8lx4jp1g"/><path class="kylvk9lcu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:menu-restaurant"} {...others} />);
}

export default Component;
