import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cl4bojyvf.css';
import '../../css/f/fxd4qubmf.css';
import '../../css/w/wrh9myb6j.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="cl4bojyvf"/><path class="fxd4qubmf"/><path class="wrh9myb6j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:peace-symbol"} {...others} />);
}

export default Component;
