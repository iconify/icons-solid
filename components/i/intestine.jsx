import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eztqw9biy.css';
import '../../css/l/l12gs1byk.css';
import '../../css/w/w5ns5rb2p.css';
import '../../css/b/b56jsxbuc.css';
import '../../css/x/x3aeyw1bk.css';
import '../../css/u/uqtl_u28h.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="eztqw9biy"><path class="l12gs1byk"/><path class="w5ns5rb2p"/><path class="b56jsxbuc"/></g><path class="x3aeyw1bk"/><path class="uqtl_u28h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:intestine"} {...others} />);
}

export default Component;
