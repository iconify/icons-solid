import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/e1i41d6ns.css';
import '../../css/w/w7b836rrt.css';
import '../../css/o/omhztw0yy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="e1i41d6ns"/><path class="w7b836rrt"/><path class="omhztw0yy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:hair-dress-round-brush-1"} {...others} />);
}

export default Component;
