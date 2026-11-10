import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/p/p6xciw-nf.css';
import '../../css/c/ci7_qeb4b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="p6xciw-nf"/><path class="ci7_qeb4b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:epsilon-capital"} {...others} />);
}

export default Component;
