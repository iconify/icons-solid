import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/t/t2-beacby.css';
import '../../css/r/rys2yo74m.css';
import '../../css/i/is1jxbb4b.css';
import '../../css/n/ndsrwmbkq.css';
import '../../css/v/v625o3kys.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="t2-beacby wm-shadow"/><path class="rys2yo74m wm-shadow"/><path class="is1jxbb4b"/><path class="ndsrwmbkq"/><path class="v625o3kys"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:settings"} {...others} />);
}

export default Component;
