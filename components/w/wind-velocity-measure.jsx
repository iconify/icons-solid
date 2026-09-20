import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/th3wfybdr.css';
import '../../css/v/vbq7k_7fl.css';
import '../../css/o/ogkvt6bpi.css';
import '../../css/a/ayvryf13z.css';
import '../../css/j/j65enib8b.css';
import '../../css/h/h0h15mp5n.css';
import '../../css/t/t-cmtpb8m.css';
import '../../css/n/nwydoqzoj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="th3wfybdr"/><path class="vbq7k_7fl"/><path class="ogkvt6bpi"/><path class="ayvryf13z"/><path class="j65enib8b"/><path class="h0h15mp5n"/><path class="t-cmtpb8m"/><path class="nwydoqzoj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:wind-velocity-measure"} {...others} />);
}

export default Component;
