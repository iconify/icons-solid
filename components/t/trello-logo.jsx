import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/g/gxqb1vwzx.css';
import '../../css/l/lu8yh13pg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="gxqb1vwzx"/><path class="lu8yh13pg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:trello-logo"} {...others} />);
}

export default Component;
