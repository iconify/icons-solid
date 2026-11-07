import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u0rjtzvug.css';
import '../../css/s/sqj5jrb3e.css';
import '../../css/d/dkjc56b1a.css';
import '../../css/h/hpi3dgb3m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u0rjtzvug"/><path class="sqj5jrb3e"/><path class="dkjc56b1a"/><path class="hpi3dgb3m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sale-bold-duotone"} {...others} />);
}

export default Component;
