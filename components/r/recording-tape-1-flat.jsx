import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v5cddtb6p.css';
import '../../css/h/h4t62y4sv.css';
import '../../css/a/aoztx7byq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="v5cddtb6p"/><path class="h4t62y4sv"/><path class="aoztx7byq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:recording-tape-1-flat"} {...others} />);
}

export default Component;
