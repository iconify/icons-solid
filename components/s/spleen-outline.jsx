import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eqquj7bkg.css';
import '../../css/g/gi4z11bdi.css';
import '../../css/i/icynqdbqy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="eqquj7bkg"/><path class="gi4z11bdi"/><path class="icynqdbqy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:spleen-outline"} {...others} />);
}

export default Component;
