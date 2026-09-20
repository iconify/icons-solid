import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/b/bgoz-0d_p.css';
import '../../css/h/hiwodhbjd.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><circle class="bgoz-0d_p"/><circle class="hiwodhbjd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:venn"} {...others} />);
}

export default Component;
