import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/v/vu12olbyp.css';
import '../../css/x/x56nlvbqu.css';
import '../../css/z/zgi57wboo.css';
import '../../css/c/cn7mk_15d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="vu12olbyp wm-deco"/><path class="wm-deco x56nlvbqu"/><path class="wm-deco zgi57wboo"/><path class="cn7mk_15d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:candy-blueprint"} {...others} />);
}

export default Component;
