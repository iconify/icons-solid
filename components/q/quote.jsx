import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/wtss34l8c.css';
import '../../css/s/sch97tbtk.css';
import '../../css/l/lfte-rb_e.css';
import '../../css/f/f47ozsb6t.css';
import '../../css/b/ba872lbnz.css';
import '../../css/x/x-o15vaui.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="wm-shadow wtss34l8c"/><path class="sch97tbtk"/><path class="lfte-rb_e"/><path class="f47ozsb6t"/><path class="ba872lbnz wm-shine"/><path class="wm-deco x-o15vaui"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:quote"} {...others} />);
}

export default Component;
