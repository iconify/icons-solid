import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y4u1kjb9p.css';
import '../../css/c/c90dw3ben.css';
import '../../css/k/kg3owjulh.css';
import '../../css/e/ef168_1lz.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="y4u1kjb9p"/><path class="c90dw3ben"/><path class="kg3owjulh"/><path class="ef168_1lz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:empty-clipboard"} {...others} />);
}

export default Component;
