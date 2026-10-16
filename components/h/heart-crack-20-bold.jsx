import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p_oql998d.css';
import '../../css/s/ss0jtlv6n.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="p_oql998d"/><path class="ss0jtlv6n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:heart-crack-20-bold"} {...others} />);
}

export default Component;
