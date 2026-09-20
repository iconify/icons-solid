import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f2jbpwb_z.css';
import '../../css/i/i7n49ic5b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><ellipse class="f2jbpwb_z"/><path class="i7n49ic5b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:golf-duotone"} {...others} />);
}

export default Component;
