import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wu990gbfq.css';
import '../../css/l/lmh0mebmw.css';
import '../../css/f/f5fxjbbmn.css';
import '../../css/p/pb8vlu4cs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="wu990gbfq"/><path class="lmh0mebmw"/><path class="f5fxjbbmn"/><path class="pb8vlu4cs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:git-branch"} {...others} />);
}

export default Component;
