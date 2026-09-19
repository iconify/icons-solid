import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w22f1_bsl.css';
import '../../css/c/cyx6qvb9e.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="w22f1_bsl"/><path class="cyx6qvb9e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:clipboard"} {...others} />);
}

export default Component;
