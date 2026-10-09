import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cj0zxfb_c.css';
import '../../css/c/c56u3549k.css';
import '../../css/l/lge81q-cq.css';
import '../../css/j/jsghbdbsn.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="cj0zxfb_c"/><path class="c56u3549k"/><path class="lge81q-cq"/><path class="jsghbdbsn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:portable-solar-48"} {...others} />);
}

export default Component;
