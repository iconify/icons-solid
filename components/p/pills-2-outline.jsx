import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/emao1kbkd.css';
import '../../css/m/mzmizbcgi.css';
import '../../css/x/xl7cracwe.css';
import '../../css/i/i9jq-5bdd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="emao1kbkd"/><path clip-rule="evenodd" class="mzmizbcgi"/><path class="xl7cracwe"/><path clip-rule="evenodd" class="i9jq-5bdd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:pills-2-outline"} {...others} />);
}

export default Component;
