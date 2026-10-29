import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/g/gwxm7ts-h.css';
import '../../css/b/b6rt83uyo.css';
import '../../css/o/o-34nlbmr.css';
import '../../css/y/y9drjib_l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="gwxm7ts-h wm-deco"/><path class="b6rt83uyo wm-k"/><path class="o-34nlbmr wm-a"/><path class="wm-a y9drjib_l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:peacock-feather-blueprint"} {...others} />);
}

export default Component;
