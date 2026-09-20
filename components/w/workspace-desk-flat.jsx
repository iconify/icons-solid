import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jl3-4dbji.css';
import '../../css/e/eors92b-g.css';
import '../../css/h/h8551tu4h.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="jl3-4dbji"/><path clip-rule="evenodd" class="eors92b-g"/><path clip-rule="evenodd" class="h8551tu4h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:workspace-desk-flat"} {...others} />);
}

export default Component;
