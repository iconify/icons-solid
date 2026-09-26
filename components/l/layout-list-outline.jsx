import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jejtjfb2d.css';
import '../../css/v/vhbwzzl5c.css';
import '../../css/z/z9mb6ob-n.css';
import '../../css/a/a25lzkbjx.css';
import '../../css/c/cpsthybpp.css';
import '../../css/o/oblhbkbjv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="jejtjfb2d"/><path class="vhbwzzl5c"/><path class="z9mb6ob-n"/><path clip-rule="evenodd" class="a25lzkbjx"/><path class="cpsthybpp"/><path class="oblhbkbjv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:layout-list-outline"} {...others} />);
}

export default Component;
