import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ls6_xn_4i.css';
import '../../css/b/blqv12b3r.css';
import '../../css/e/ejdxgubta.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="ls6_xn_4i"><path class="blqv12b3r"/><path class="ejdxgubta"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:verilog"} {...others} />);
}

export default Component;
