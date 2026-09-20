import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/r/rrjakbcym.css';
import '../../css/a/a6ca1bcxc.css';
import '../../css/e/epyd8hb_w.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="rrjakbcym"/><path class="a6ca1bcxc"/><path class="epyd8hb_w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:ui-phone-slider-vertical"} {...others} />);
}

export default Component;
