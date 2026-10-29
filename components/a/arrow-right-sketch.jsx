import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/d8w4ckr4q.css';
import '../../css/a/a8xvl7b2z.css';
import '../../css/e/eqg5iy27b.css';
import '../../css/z/ze-r5kfbs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="d8w4ckr4q wm-k"/><path class="a8xvl7b2z wm-a"/><path class="eqg5iy27b wm-k"/><path class="wm-a ze-r5kfbs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:arrow-right-sketch"} {...others} />);
}

export default Component;
