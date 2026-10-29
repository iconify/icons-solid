import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/an0e7536v.css';
import '../../css/o/o5w2f1uww.css';
import '../../css/u/umh0ngbrr.css';
import '../../css/d/do2d_cw5r.css';
import '../../css/j/j_zv1xxot.css';
import '../../css/q/q4y18jbkf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="an0e7536v wm-shadow"/><path class="o5w2f1uww wm-k"/><path class="umh0ngbrr wm-k"/><path class="do2d_cw5r wm-k"/><path class="j_zv1xxot wm-k"/><path class="q4y18jbkf wm-shine"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:arrow-up-right"} {...others} />);
}

export default Component;
