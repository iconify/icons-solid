import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uxgaw4bak.css';
import '../../css/w/wih00se2n.css';
import '../../css/z/zpnz3rbfk.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="uxgaw4bak"/><path class="wih00se2n"/><path clip-rule="evenodd" class="zpnz3rbfk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:left-click-flat"} {...others} />);
}

export default Component;
