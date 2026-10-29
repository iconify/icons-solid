import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/k/kq5eolb-v.css';
import '../../css/y/yqibumbcz.css';
import '../../css/w/wyrbr8bdi.css';
import '../../css/z/zwa6_4wrh.css';
import '../../css/v/v23ugcokk.css';
import '../../css/g/gcow6tbab.css';
import '../../css/n/nc44e8bvb.css';
import '../../css/w/wc8-jibas.css';
import '../../css/x/xrskn9wll.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="kq5eolb-v wm-shadow"/><path class="yqibumbcz"/><path class="wyrbr8bdi"/><path class="zwa6_4wrh"/><path class="v23ugcokk wm-shine"/><path class="gcow6tbab wm-s"/><path class="nc44e8bvb wm-s"/><path class="wc8-jibas wm-s"/><path class="wm-deco xrskn9wll"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:remove-formatting"} {...others} />);
}

export default Component;
