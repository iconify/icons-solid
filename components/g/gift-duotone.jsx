import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/krtu-13-w.css';
import '../../css/x/xpoj7wbil.css';
import '../../css/h/hn0gbhbid.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="krtu-13-w"/><path class="xpoj7wbil"/><path class="hn0gbhbid"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:gift-duotone"} {...others} />);
}

export default Component;
