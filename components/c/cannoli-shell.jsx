import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wz6ef4bsh.css';
import '../../css/u/uqdpf65ef.css';
import '../../css/j/jf5jiy4cv.css';
import '../../css/t/tpdj2bgpq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wz6ef4bsh"/><circle class="uqdpf65ef"/><path class="jf5jiy4cv"/><path class="tpdj2bgpq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:cannoli-shell"} {...others} />);
}

export default Component;
