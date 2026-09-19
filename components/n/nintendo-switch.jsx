import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/c/cjphzrb1p.css';
import '../../css/w/w4ddqztbi.css';
import '../../css/u/u4y2khvej.css';
import '../../css/b/bbhk76y4q.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="cjphzrb1p"/><path class="w4ddqztbi"/><path class="u4y2khvej"/><path class="bbhk76y4q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:nintendo-switch"} {...others} />);
}

export default Component;
