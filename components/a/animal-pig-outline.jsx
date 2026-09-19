import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fqgjk-b4m.css';
import '../../css/o/oh3h2lnrv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="fqgjk-b4m"/><path clip-rule="evenodd" class="oh3h2lnrv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:animal-pig-outline"} {...others} />);
}

export default Component;
