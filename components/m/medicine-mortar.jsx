import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cilbtvbnf.css';
import '../../css/c/cc-3nob7f.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="cilbtvbnf"/><path clip-rule="evenodd" class="cc-3nob7f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:medicine-mortar"} {...others} />);
}

export default Component;
