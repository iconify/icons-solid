import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ajlf8kbsk.css';
import '../../css/z/zgn55edda.css';
import '../../css/p/p74anlbhw.css';
import '../../css/h/hpa71hn0a.css';
import '../../css/r/rs7fadcaq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ajlf8kbsk"/><path class="zgn55edda"/><path class="p74anlbhw"/><circle transform="rotate(-90 19.46 17.7)" class="hpa71hn0a"/><path class="rs7fadcaq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:mail-settings"} {...others} />);
}

export default Component;
