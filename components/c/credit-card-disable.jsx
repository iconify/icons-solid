import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wwgxp3h9z.css';
import '../../css/x/xhaltxbpz.css';
import '../../css/u/u0iznvb4d.css';
import '../../css/w/w_0vomo4y.css';
import '../../css/l/lz_5idb6i.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="wwgxp3h9z"/><path class="xhaltxbpz"/><path class="u0iznvb4d"/><path class="w_0vomo4y"/><path class="lz_5idb6i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:credit-card-disable"} {...others} />);
}

export default Component;
