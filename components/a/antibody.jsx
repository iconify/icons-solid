import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bj3ijhgye.css';
import '../../css/x/x72vtmf2a.css';
import '../../css/k/kt_6d8b9l.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="bj3ijhgye"/><path class="x72vtmf2a"/><path class="kt_6d8b9l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:antibody"} {...others} />);
}

export default Component;
