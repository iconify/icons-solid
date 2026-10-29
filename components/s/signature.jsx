import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/folq6fdlx.css';
import '../../css/b/bvfvzcsqb.css';
import '../../css/l/lojmmxb0t.css';
import '../../css/f/futmjjb2m.css';
import '../../css/q/q_djmn9eq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="folq6fdlx wm-shadow"/><path class="bvfvzcsqb wm-k"/><path class="lojmmxb0t wm-k"/><path class="futmjjb2m wm-a"/><path class="q_djmn9eq wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:signature"} {...others} />);
}

export default Component;
