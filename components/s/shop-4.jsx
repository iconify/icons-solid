import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wlkfjbbev.css';
import '../../css/f/ft28bq46d.css';
import '../../css/f/fd6zeibgx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wlkfjbbev"/><path class="ft28bq46d"/><path class="fd6zeibgx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:shop-4"} {...others} />);
}

export default Component;
