import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c5xdmn.css';
import '../../css/i/izvovy.css';
import '../../css/z/zxndow.css';
import '../../css/f/f-8s9h.css';
import '../../css/r/rn7y4o.css';
import '../../css/b/botfzx.css';
import '../../css/a/aqb-fd.css';
import '../../css/s/so-from-22.css';
import '../../css/s/so-to-0.css';
import '../../css/d/d-2dk93e.css';
import '../../css/d/d-l5brra.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGlWxEGcQd"><path class="c5xdmn izvovy zxndow"/><path class="c5xdmn f-8s9h zxndow"/><path class="c5xdmn rn7y4o"/></mask></defs><path mask="url(#SVGlWxEGcQd)" class="botfzx"/><path class="aqb-fd c5xdmn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:person-off-loop"} {...others} />);
}

export default Component;
