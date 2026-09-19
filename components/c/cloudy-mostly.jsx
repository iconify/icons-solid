import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/x/x38mjom2y.css';
import '../../css/t/t_kavccpz.css';
import '../../css/m/ma-vyac-f.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="x38mjom2y"/><path class="t_kavccpz"/><path class="ma-vyac-f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:cloudy-mostly"} {...others} />);
}

export default Component;
