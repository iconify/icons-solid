import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/l7z6dbf4g.css';
import '../../css/j/jfx8o0b0z.css';
import '../../css/o/oz-lqwbam.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><circle class="l7z6dbf4g"/><ellipse class="jfx8o0b0z"/><ellipse class="oz-lqwbam"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:medium"} {...others} />);
}

export default Component;
