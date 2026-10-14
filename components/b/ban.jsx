import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/u/u6cy43dlg.css';
import '../../css/e/e8c3lx6za.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="u6cy43dlg"/><path class="e8c3lx6za"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:ban"} {...others} />);
}

export default Component;
