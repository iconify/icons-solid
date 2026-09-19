import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mcqdwpbfu.css';
import '../../css/v/v-kdjsb9r.css';
import '../../css/e/ecbdqbjip.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="mcqdwpbfu"/><path clip-rule="evenodd" class="v-kdjsb9r"/><path class="ecbdqbjip"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:animal-pig"} {...others} />);
}

export default Component;
