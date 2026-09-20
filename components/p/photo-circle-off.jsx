import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kelkkobbo.css';
import '../../css/f/fi_-pccws.css';
import '../../css/e/e-yamx98d.css';
import '../../css/a/a5mim-b8p.css';
import '../../css/z/zsuclwbnx.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="kelkkobbo"/><path class="fi_-pccws"/><path clip-rule="evenodd" class="e-yamx98d"/><path clip-rule="evenodd" class="a5mim-b8p"/><path class="zsuclwbnx"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:photo-circle-off"} {...others} />);
}

export default Component;
