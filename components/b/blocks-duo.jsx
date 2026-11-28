import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bm9larbcx.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/ebyo9fyqg.css';
import '../../css/j/j4pzf9bzr.css';
import '../../css/r/r39x_21mf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bm9larbcx secondary"/><g class="dt0cm9dhy primary"><path class="ebyo9fyqg"/><path class="j4pzf9bzr"/><path class="r39x_21mf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:blocks-duo"} {...others} />);
}

export default Component;
