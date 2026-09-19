import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/d/dv1-ps2zb.css';
import '../../css/k/kuucht3jf.css';
import '../../css/u/u6ii_acob.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="dv1-ps2zb"/><rect class="kuucht3jf"/><rect class="u6ii_acob"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:rock-gesture"} {...others} />);
}

export default Component;
