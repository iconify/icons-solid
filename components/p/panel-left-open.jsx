import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/g/gno__6bnx.css';
import '../../css/n/npbiomb3d.css';
import '../../css/c/cvpr-5bot.css';
import '../../css/o/olay1zo5l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="gno__6bnx wm-shadow"/><path class="npbiomb3d wm-shadow"/><path class="cvpr-5bot"/><path class="olay1zo5l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:panel-left-open"} {...others} />);
}

export default Component;
