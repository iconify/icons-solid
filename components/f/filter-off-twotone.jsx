import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b3668i.css';
import '../../css/t/t5pxry.css';
import '../../css/f/fp70ia.css';
import '../../css/o/oxx-om.css';
import '../../css/b/botfzx.css';
import '../../css/g/gd_4-q.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-54.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVG8m5WkcNs"><path class="b3668i t5pxry"/><path class="fp70ia oxx-om t5pxry"/></mask></defs><path mask="url(#SVG8m5WkcNs)" class="botfzx"/><path class="fp70ia gd_4-q t5pxry"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:filter-off-twotone"} {...others} />);
}

export default Component;
