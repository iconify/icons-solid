import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oqznlcbzo.css';
import '../../css/n/n4u-l-u4d.css';
import '../../css/j/ja1y-wb8x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="oqznlcbzo"/><path class="n4u-l-u4d"/><path class="ja1y-wb8x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:gamepad-1"} {...others} />);
}

export default Component;
