import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/h/he0kqrarb.css';
import '../../css/m/mv22pbpqt.css';
import '../../css/g/gixm9ebqf.css';
import '../../css/u/u6y-by0df.css';
import '../../css/t/t3j_37mnz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="he0kqrarb"/><path class="mv22pbpqt"/><path class="gixm9ebqf"/><path class="u6y-by0df"/><path class="t3j_37mnz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:microscope-observation-sciene"} {...others} />);
}

export default Component;
