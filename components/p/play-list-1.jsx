import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/m/mb2dhrbmp.css';
import '../../css/h/h1ky5u9mz.css';
import '../../css/l/ldkkwxbud.css';
import '../../css/i/iuhgsyg_l.css';
import '../../css/w/wrd43sbnu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="mb2dhrbmp"/><path class="h1ky5u9mz"/><path class="ldkkwxbud"/><path class="iuhgsyg_l"/><path class="wrd43sbnu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:play-list-1"} {...others} />);
}

export default Component;
