import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/b/b9v2r3b5c.css';
import '../../css/e/ecrul3biy.css';
import '../../css/t/tzf16xm0i.css';
import '../../css/v/v-ytw7mjk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="b9v2r3b5c wm-shadow"/><path class="ecrul3biy wm-shadow"/><path class="tzf16xm0i"/><path class="v-ytw7mjk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:peacock-feather"} {...others} />);
}

export default Component;
