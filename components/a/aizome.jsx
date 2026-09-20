import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ktnayv9ff.css';
import '../../css/c/cmf315bwz.css';
import '../../css/t/tb-jvs7gl.css';

const viewBox = {"width":125,"height":21};
const content = `<path class="ktnayv9ff"/><path class="cmf315bwz"/><path class="tb-jvs7gl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:aizome"} {...others} />);
}

export default Component;
