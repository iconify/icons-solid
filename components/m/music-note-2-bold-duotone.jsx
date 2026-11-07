import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x8i3b9xno.css';
import '../../css/x/xbxy7ib5r.css';
import '../../css/c/c0tgf1saz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x8i3b9xno"/><path class="xbxy7ib5r"/><path class="c0tgf1saz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:music-note-2-bold-duotone"} {...others} />);
}

export default Component;
