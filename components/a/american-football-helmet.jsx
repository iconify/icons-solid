import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o3u_gjbve.css';
import '../../css/o/opypcab7p.css';
import '../../css/n/n-jc1sbdf.css';
import '../../css/b/bf0a11btt.css';
import '../../css/s/s4oo93bfl.css';
import '../../css/u/un92fm4rj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="o3u_gjbve"/><path class="opypcab7p"/><path class="n-jc1sbdf"/><path class="bf0a11btt"/><path class="s4oo93bfl"/><path class="un92fm4rj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:american-football-helmet"} {...others} />);
}

export default Component;
