import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a91pdm37g.css';
import '../../css/c/cd8txwljy.css';
import '../../css/k/klacz1bra.css';
import '../../css/h/h2zgbmbcp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="a91pdm37g"/><path clip-rule="evenodd" class="cd8txwljy"/><path class="klacz1bra"/><path class="h2zgbmbcp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:2g"} {...others} />);
}

export default Component;
