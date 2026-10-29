import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zd9nkhyoc.css';
import '../../css/p/p75pqt91z.css';
import '../../css/z/zc15j_bcm.css';
import '../../css/p/p35wb2biw.css';
import '../../css/m/me-r5rm1l.css';
import '../../css/d/d_jb3ybje.css';
import '../../css/c/c-o4xsbml.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-shadow zd9nkhyoc"/><path class="p75pqt91z wm-k"/><path class="wm-k zc15j_bcm"/><path class="p35wb2biw wm-k"/><path class="me-r5rm1l wm-k"/><path class="d_jb3ybje wm-s"/><path class="c-o4xsbml wm-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:heading-2"} {...others} />);
}

export default Component;
