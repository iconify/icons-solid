import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/m/ma5ivp-0g.css';
import '../../css/m/mp5ioowxd.css';
import '../../css/f/fzg-l0b9g.css';
import '../../css/v/vy9t1lb6t.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="ma5ivp-0g"/><path class="mp5ioowxd"/><path class="fzg-l0b9g"/><path class="vy9t1lb6t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:devices"} {...others} />);
}

export default Component;
