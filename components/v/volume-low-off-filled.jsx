import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nr7d0j.css';
import '../../css/t/t5pxry.css';
import '../../css/o/oxx-om.css';
import '../../css/u/u1r-pm.css';
import '../../css/b/botfzx.css';
import '../../css/g/gd_4-q.css';
import '../../css/s/so-from-34.css';
import '../../css/f/fill-to-1.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVG0iyYbdgG"><path class="nr7d0j t5pxry"/><path class="oxx-om t5pxry u1r-pm"/></mask></defs><path mask="url(#SVG0iyYbdgG)" class="botfzx"/><path class="gd_4-q t5pxry u1r-pm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:volume-low-off-filled"} {...others} />);
}

export default Component;
