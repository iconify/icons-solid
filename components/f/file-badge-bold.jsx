import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/deb44qgbd.css';
import '../../css/w/wm3j448rr.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="deb44qgbd"/><path class="wm3j448rr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:file-badge-bold"} {...others} />);
}

export default Component;
