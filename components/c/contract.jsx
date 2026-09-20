import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m9ryynb4c.css';
import '../../css/f/fmn04bicb.css';
import '../../css/g/gjxjpib_z.css';
import '../../css/i/i30jjrboj.css';
import '../../css/j/j0ximubwp.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="m9ryynb4c"/><path class="fmn04bicb"/><path class="gjxjpib_z"/><path class="i30jjrboj"/><path class="j0ximubwp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:contract"} {...others} />);
}

export default Component;
