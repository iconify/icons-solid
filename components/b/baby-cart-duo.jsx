import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dukzfrx0n.css';
import '../../css/x/xzx5-jbds.css';
import '../../css/p/pl6oeacwz.css';
import '../../css/s/st7aynhys.css';
import '../../css/p/pt2zl0cit.css';
import '../../css/h/hrv9cjqxa.css';
import '../../css/h/hgcgmf4sg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="dukzfrx0n"/><path class="xzx5-jbds"/><path class="pl6oeacwz"/><path class="st7aynhys"/><path class="pt2zl0cit"/><path class="hrv9cjqxa"/><path class="hgcgmf4sg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:baby-cart-duo"} {...others} />);
}

export default Component;
