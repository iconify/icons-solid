import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/q/qmu73w4wj.css';
import '../../css/z/zvpct9b4g.css';
import '../../css/p/p2-artbdi.css';
import '../../css/g/gurxiwbrg.css';
import '../../css/w/wy543bc4c.css';
import '../../css/x/xkzbfq_8i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="qmu73w4wj wm-shadow"/><path class="zvpct9b4g"/><path class="p2-artbdi"/><path class="gurxiwbrg"/><path class="wm-shine wy543bc4c"/><path class="wm-deco xkzbfq_8i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:case-lower"} {...others} />);
}

export default Component;
