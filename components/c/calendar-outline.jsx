import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pag7ixb7t.css';
import '../../css/n/n012lha3v.css';
import '../../css/m/m6xg-0gwd.css';
import '../../css/a/alwdmn3ok.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="pag7ixb7t"/><path clip-rule="evenodd" class="n012lha3v"/><path clip-rule="evenodd" class="m6xg-0gwd"/><path class="alwdmn3ok"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:calendar-outline"} {...others} />);
}

export default Component;
