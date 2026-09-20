import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/w/whciqfy6m.css';
import '../../css/o/oi5j6dvln.css';
import '../../css/d/dn-0z_l-l.css';
import '../../css/v/vsx8-3bwe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="whciqfy6m"/><path class="oi5j6dvln"/><path class="dn-0z_l-l"/><path class="vsx8-3bwe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:book-encyclopedia-1"} {...others} />);
}

export default Component;
