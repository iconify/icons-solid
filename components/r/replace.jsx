import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bbjleibzi.css';
import '../../css/e/ek1i92gtz.css';
import '../../css/x/xkfqx08lh.css';
import '../../css/q/q14uygbbv.css';
import '../../css/q/q1xumf0gv.css';
import '../../css/a/a6cgyslhh.css';
import '../../css/f/f4csy8bkh.css';
import '../../css/o/on1tocbwa.css';
import '../../css/a/a0gt23b0d.css';
import '../../css/k/ka1dsnbrk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bbjleibzi wm-k"/><path class="ek1i92gtz wm-k"/><path class="wm-k xkfqx08lh"/><path class="q14uygbbv wm-a"/><path class="q1xumf0gv wm-a"/><path class="a6cgyslhh wm-a"/><path class="f4csy8bkh wm-k"/><path class="on1tocbwa wm-k"/><path class="a0gt23b0d wm-k"/><path class="ka1dsnbrk wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:replace"} {...others} />);
}

export default Component;
