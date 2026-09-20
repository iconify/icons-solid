import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/r-do9_buf.css';
import '../../css/b/b-w7m1bnc.css';
import '../../css/p/p-t_3wb-z.css';
import '../../css/f/f00_0pbwr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="r-do9_buf"/><path class="b-w7m1bnc"/><path class="p-t_3wb-z"/><path class="f00_0pbwr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:washing-machine-minimalistic-linear"} {...others} />);
}

export default Component;
