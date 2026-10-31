import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mtdee3zsb.css';
import '../../css/f/fnj4pjb-k.css';
import '../../css/d/d3ldqpb6o.css';
import '../../css/b/b91ed8jnd.css';
import '../../css/y/yeckeacte.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="mtdee3zsb"/><circle class="fnj4pjb-k"/><circle class="d3ldqpb6o"/><path class="b91ed8jnd"/><path clip-rule="evenodd" class="yeckeacte"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-memes:derp-face"} {...others} />);
}

export default Component;
