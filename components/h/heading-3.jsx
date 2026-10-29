import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zd9nkhyoc.css';
import '../../css/p/p75pqt91z.css';
import '../../css/z/zc15j_bcm.css';
import '../../css/p/p35wb2biw.css';
import '../../css/m/me-r5rm1l.css';
import '../../css/q/qinz0--lz.css';
import '../../css/l/lqspqzqtm.css';
import '../../css/e/e0h4x7bhw.css';
import '../../css/y/yu1thz9zh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-shadow zd9nkhyoc"/><path class="p75pqt91z wm-k"/><path class="wm-k zc15j_bcm"/><path class="p35wb2biw wm-k"/><path class="me-r5rm1l wm-k"/><path class="qinz0--lz wm-s"/><path class="lqspqzqtm wm-s"/><path class="e0h4x7bhw wm-s"/><path class="wm-s yu1thz9zh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:heading-3"} {...others} />);
}

export default Component;
