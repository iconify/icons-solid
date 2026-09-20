import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j_752eh7h.css';
import '../../css/e/evkwsw-9y.css';
import '../../css/f/fxtynhboz.css';
import '../../css/p/pw-e6f3xm.css';
import '../../css/i/iswi1wlkv.css';
import '../../css/c/chvcoeb9a.css';
import '../../css/b/bvh3y3b5b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="j_752eh7h"/><path class="evkwsw-9y"/><path class="fxtynhboz"/><path class="pw-e6f3xm"/><path class="iswi1wlkv"/><path class="chvcoeb9a"/><path class="bvh3y3b5b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:skiing-snow-scooter-person"} {...others} />);
}

export default Component;
