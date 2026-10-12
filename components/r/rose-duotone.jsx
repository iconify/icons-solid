import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m08_yltua.css';
import '../../css/x/x6dpybc8s.css';
import '../../css/u/uexsgo8yq.css';
import '../../css/o/ostedib5u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="m08_yltua"/><path class="x6dpybc8s"/><path class="uexsgo8yq"/><path class="ostedib5u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:rose-duotone"} {...others} />);
}

export default Component;
