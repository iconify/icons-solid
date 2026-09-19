import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/f/f8nkb8g-f.css';
import '../../css/q/qyj6jnh_w.css';
import '../../css/n/nvj328b0o.css';
import '../../css/p/pwa5qqbfy.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="f8nkb8g-f"/><path class="qyj6jnh_w"/><path class="nvj328b0o"/><path class="pwa5qqbfy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:power-outline"} {...others} />);
}

export default Component;
