import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/he-a7-b4q.css';
import '../../css/p/pr-9nzzxf.css';
import '../../css/m/mpt--1sku.css';
import '../../css/p/pycvenbgs.css';
import '../../css/u/uc4okrbra.css';
import '../../css/v/v2ufzubeu.css';
import '../../css/z/zwly2tbfk.css';
import '../../css/l/l11bvm1yl.css';
import '../../css/c/cpag-ue8o.css';
import '../../css/y/y277muvus.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="he-a7-b4q"/><path class="pr-9nzzxf"/><path class="mpt--1sku"/><path class="pycvenbgs"/><path class="uc4okrbra"/><path class="v2ufzubeu"/><path class="zwly2tbfk"/><path class="l11bvm1yl"/><path class="cpag-ue8o"/><path class="y277muvus"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:champagne-glass-1"} {...others} />);
}

export default Component;
