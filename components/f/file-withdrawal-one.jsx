import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/b/bnfkuob9z.css';
import '../../css/e/ec4xmif2w.css';
import '../../css/f/fb46w8bjs.css';
import '../../css/l/lxqch5bjp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="bnfkuob9z"/><path class="ec4xmif2w"/><path class="fb46w8bjs"/><path class="lxqch5bjp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:file-withdrawal-one"} {...others} />);
}

export default Component;
