import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i6axgjb8x.css';
import '../../css/e/ekrazfehn.css';
import '../../css/p/puvo0nbjy.css';
import '../../css/u/uuk67hb_f.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="i6axgjb8x"/><path class="ekrazfehn"/><path class="puvo0nbjy"/><path class="uuk67hb_f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:screen-1"} {...others} />);
}

export default Component;
