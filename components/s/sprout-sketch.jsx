import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/jwebfwysk.css';
import '../../css/a/a51zlh9nm.css';
import '../../css/b/bbm6b67wr.css';
import '../../css/i/ih9g-eb6y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="jwebfwysk wm-k"/><path class="a51zlh9nm wm-a"/><path class="bbm6b67wr wm-k"/><path class="ih9g-eb6y wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:sprout-sketch"} {...others} />);
}

export default Component;
