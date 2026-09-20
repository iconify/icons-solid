import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uidqnq8xn.css';
import '../../css/f/f7kvlvawm.css';
import '../../css/d/ddu_4u57e.css';
import '../../css/q/qs_bk4z-p.css';
import '../../css/b/b9uy9ukry.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="uidqnq8xn"/><path class="f7kvlvawm"/><path class="ddu_4u57e"/><path class="qs_bk4z-p"/><path class="b9uy9ukry"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:search-visual"} {...others} />);
}

export default Component;
