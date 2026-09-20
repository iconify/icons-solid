import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/undusqblp.css';
import '../../css/b/bsljbyrxg.css';
import '../../css/e/e1i1n9b5e.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="undusqblp"/><path class="bsljbyrxg"/><path class="e1i1n9b5e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:expand-window-1"} {...others} />);
}

export default Component;
