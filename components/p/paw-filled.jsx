import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gaf8fo0hg.css';
import '../../css/m/mfu3x7brs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="gaf8fo0hg"/><path class="mfu3x7brs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:paw-filled"} {...others} />);
}

export default Component;
