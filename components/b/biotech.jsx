import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hz0obiboj.css';
import '../../css/b/b7-nwhb_u.css';
import '../../css/w/wta8ibc4z.css';
import '../../css/r/rncsri80p.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hz0obiboj"/><path class="b7-nwhb_u"/><path class="wta8ibc4z"/><path class="rncsri80p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:biotech"} {...others} />);
}

export default Component;
