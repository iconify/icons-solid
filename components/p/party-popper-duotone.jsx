import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ifwqegp9d.css';
import '../../css/u/ulb2g3bnb.css';
import '../../css/i/ijavnscdy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ifwqegp9d"/><path class="ulb2g3bnb"/><path class="ijavnscdy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:party-popper-duotone"} {...others} />);
}

export default Component;
