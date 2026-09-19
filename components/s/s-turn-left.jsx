import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/e/efr7i9i9d.css';
import '../../css/o/ofmcgpb_u.css';
import '../../css/g/gy1a9xfxe.css';
import '../../css/j/jo7s7hbft.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="efr7i9i9d"/><path class="ofmcgpb_u"/><path class="gy1a9xfxe"/><circle transform="rotate(-180 12 10)" class="jo7s7hbft"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:s-turn-left"} {...others} />);
}

export default Component;
