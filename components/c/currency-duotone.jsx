import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rrk1nfbye.css';
import '../../css/a/as_zecc1v.css';
import '../../css/c/cy496ybdm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rrk1nfbye"/><path class="as_zecc1v"/><path class="cy496ybdm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:currency-duotone"} {...others} />);
}

export default Component;
