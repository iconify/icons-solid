import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jlr1o39qv.css';
import '../../css/c/cg7d2pfom.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="jlr1o39qv"/><circle class="cg7d2pfom"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:user-contributions-ltr"} {...others} />);
}

export default Component;
