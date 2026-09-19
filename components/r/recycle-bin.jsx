import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/g/gkuoonbvi.css';
import '../../css/h/hy7c0xbeq.css';
import '../../css/c/czlodr74y.css';
import '../../css/p/pb581_44b.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="gkuoonbvi"/><path class="hy7c0xbeq"/><path class="czlodr74y"/><path class="pb581_44b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:recycle-bin"} {...others} />);
}

export default Component;
