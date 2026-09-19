import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/d/dxwo3xz8p.css';
import '../../css/f/fr5macbyd.css';
import '../../css/s/sl_g-c3zu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="dxwo3xz8p"/><path class="fr5macbyd"/><path class="sl_g-c3zu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:dropbox"} {...others} />);
}

export default Component;
