import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/fpmz6qgbp.css';
import '../../css/d/dmvw43b8a.css';
import '../../css/u/ul8icbcwx.css';
import '../../css/g/glqwjopdo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="fpmz6qgbp wm-k"/><path class="dmvw43b8a wm-a"/><path class="ul8icbcwx wm-k"/><path class="glqwjopdo wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:person-standing-sketch"} {...others} />);
}

export default Component;
