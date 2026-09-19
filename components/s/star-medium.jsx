import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nko9qqbys.css';
import '../../css/c/cllqxnb6a.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="nko9qqbys"/><path clip-rule="evenodd" class="cllqxnb6a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:star-medium"} {...others} />);
}

export default Component;
