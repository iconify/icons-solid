import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mmmn7hb-y.css';
import '../../css/e/esmoz0bna.css';
import '../../css/b/bc79qqbow.css';
import '../../css/j/jtq_nybgm.css';
import '../../css/c/cj6sz9lag.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="mmmn7hb-y"/><path class="esmoz0bna"/><path class="bc79qqbow"/><path class="jtq_nybgm"/><path class="cj6sz9lag"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:paint-palette"} {...others} />);
}

export default Component;
