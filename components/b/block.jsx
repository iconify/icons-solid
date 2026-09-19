import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/b/bcxumnuwn.css';
import '../../css/o/oe0trmb6d.css';
import '../../css/a/az0bmdbxc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="bcxumnuwn"/><path class="oe0trmb6d"/><path class="az0bmdbxc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:block"} {...others} />);
}

export default Component;
