import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kkhl62fff.css';
import '../../css/j/jftj_8bfk.css';
import '../../css/e/elc-1sb2u.css';
import '../../css/d/dq5_8vb3g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kkhl62fff"/><path class="jftj_8bfk"/><path class="elc-1sb2u"/><path clip-rule="evenodd" class="dq5_8vb3g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:ufo-2-outline"} {...others} />);
}

export default Component;
