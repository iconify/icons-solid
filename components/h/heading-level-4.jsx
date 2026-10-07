import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/jb730ab3d.css';
import '../../css/g/g9av7kz0z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="jb730ab3d"/><path class="g9av7kz0z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wordpress:heading-level-4"} {...others} />);
}

export default Component;
