import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zz9_ft_7s.css';
import '../../css/a/a17r55bog.css';
import '../../css/q/qjfrbdceb.css';
import '../../css/w/w3-r_7gxr.css';
import '../../css/v/vim5ugb0a.css';
import '../../css/t/tdb230bfw.css';
import '../../css/a/a-k8q3-zi.css';
import '../../css/j/j7idsyccf.css';
import '../../css/e/e5j8kss1f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-k zz9_ft_7s"/><path class="a17r55bog wm-s"/><path class="qjfrbdceb wm-deco"/><path class="w3-r_7gxr wm-k"/><path class="vim5ugb0a wm-s"/><path class="tdb230bfw wm-shadow"/><path class="a-k8q3-zi wm-shine"/><path class="j7idsyccf wm-shine"/><path class="e5j8kss1f wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:file-pen"} {...others} />);
}

export default Component;
