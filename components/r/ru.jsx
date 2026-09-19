import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s_fejtbws.css';
import '../../css/l/li_ihxg7s.css';
import '../../css/j/js52zubsw.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="ft5dv1b6b"><path class="s_fejtbws"/><path class="li_ihxg7s"/><path class="js52zubsw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:ru"} {...others} />);
}

export default Component;
