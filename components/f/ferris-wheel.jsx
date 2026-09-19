import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ovj65uyrr.css';
import '../../css/z/z-i-v5b9z.css';
import '../../css/c/ck3l_yb1f.css';
import '../../css/d/dz0vutsnd.css';
import '../../css/h/hs_ytft2u.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="ovj65uyrr"/><path class="z-i-v5b9z"/><path class="ck3l_yb1f"/><path class="dz0vutsnd"/><path class="hs_ytft2u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:ferris-wheel"} {...others} />);
}

export default Component;
