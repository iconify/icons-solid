import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/h/hywotzbeb.css';
import '../../css/f/fcr_xdb0v.css';
import '../../css/f/f9ou04b4c.css';
import '../../css/x/x3l725b2z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="hywotzbeb"/><path class="fcr_xdb0v"/><path class="f9ou04b4c"/><path class="x3l725b2z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:toilet-paper"} {...others} />);
}

export default Component;
