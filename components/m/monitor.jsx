import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/y956sdb7b.css';
import '../../css/p/p-0qo7b4o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="y956sdb7b"/><path class="p-0qo7b4o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:monitor"} {...others} />);
}

export default Component;
