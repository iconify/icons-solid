import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/y/yut3b9b2i.css';
import '../../css/y/ykaujcl6k.css';
import '../../css/s/sjsc5xa7h.css';
import '../../css/p/p6sd5jadv.css';
import '../../css/n/n1w7r_63b.css';
import '../../css/l/ll48iosqq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="wm-shadow yut3b9b2i"/><path class="ykaujcl6k"/><path class="sjsc5xa7h"/><path class="p6sd5jadv"/><path class="n1w7r_63b wm-shine"/><path class="ll48iosqq wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:beef"} {...others} />);
}

export default Component;
