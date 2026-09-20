import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g4c_brc9k.css';
import '../../css/b/b85ocfb8o.css';
import '../../css/l/l73o31bzl.css';
import '../../css/r/r97vmy5tz.css';
import '../../css/y/y503lsich.css';
import '../../css/k/kee0nwbzm.css';
import '../../css/o/osmjz8n9m.css';
import '../../css/g/gh-1zqhtm.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="g4c_brc9k"/><path class="b85ocfb8o"/><path class="l73o31bzl"/><path class="r97vmy5tz"/><path class="y503lsich"/><path class="kee0nwbzm"/><path class="osmjz8n9m"/><path class="gh-1zqhtm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:orientation-landscape"} {...others} />);
}

export default Component;
