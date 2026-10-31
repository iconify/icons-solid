import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/ypvsj2bst.css';
import '../../css/k/kef5obb6y.css';
import '../../css/n/n-mljeb2b.css';
import '../../css/n/nugu0ub4s.css';
import '../../css/i/ivcoa1zos.css';
import '../../css/i/it2xynbng.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow ypvsj2bst"/><path class="kef5obb6y"/><path class="n-mljeb2b"/><path class="nugu0ub4s"/><path class="ivcoa1zos"/><path class="it2xynbng"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:watch"} {...others} />);
}

export default Component;
