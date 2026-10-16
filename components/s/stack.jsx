import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s49-uzb0r.css';
import '../../css/s/sjml9tw7u.css';
import '../../css/a/a04thlbaj.css';
import '../../css/p/pm82qk8xp.css';
import '../../css/h/hzmhwcb8k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="s49-uzb0r"/><path class="sjml9tw7u"/><path class="a04thlbaj"/><path class="pm82qk8xp"/><rect transform="matrix(0 -1 -1 0 22.23 12)" class="hzmhwcb8k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:stack"} {...others} />);
}

export default Component;
