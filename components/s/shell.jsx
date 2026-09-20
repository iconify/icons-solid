import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s59tkkbss.css';
import '../../css/u/ug24e7c6s.css';
import '../../css/c/ckeccxbty.css';
import '../../css/e/e3k9aeb1g.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="s59tkkbss"/><path class="ug24e7c6s"/><path class="ckeccxbty"/><path class="e3k9aeb1g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:shell"} {...others} />);
}

export default Component;
