import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d7gmvnb-c.css';
import '../../css/k/k30wejkhu.css';
import '../../css/q/qz6pqhb1i.css';
import '../../css/r/rjvwb1bst.css';
import '../../css/d/d0ybqlzpz.css';
import '../../css/h/hwtb70bvk.css';
import '../../css/v/v9xtv7p3i.css';
import '../../css/x/xn1d00pgs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="d7gmvnb-c wm-k"/><path class="k30wejkhu wm-k"/><path class="qz6pqhb1i wm-k"/><path class="rjvwb1bst wm-shine"/><path class="d0ybqlzpz wm-k"/><path class="hwtb70bvk wm-k"/><path class="v9xtv7p3i wm-a"/><path class="wm-a xn1d00pgs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:terminal"} {...others} />);
}

export default Component;
