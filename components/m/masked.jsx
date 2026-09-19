import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fjv3yr_cl.css';
import '../../css/e/e_m9s3bio.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="fjv3yr_cl"/><path clip-rule="evenodd" class="e_m9s3bio"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:masked"} {...others} />);
}

export default Component;
