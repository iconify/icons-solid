import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/m/mt5eweixk.css';
import '../../css/n/ninwjubig.css';
import '../../css/q/q4m91fbzi.css';
import '../../css/a/agf5n5b5r.css';
import '../../css/k/kcv6g-tdp.css';
import '../../css/x/xgw9dw2wv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="mt5eweixk wm-shadow"/><path class="ninwjubig"/><path class="q4m91fbzi"/><path class="agf5n5b5r"/><path class="kcv6g-tdp wm-shine"/><path class="wm-deco xgw9dw2wv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:list-ordered"} {...others} />);
}

export default Component;
