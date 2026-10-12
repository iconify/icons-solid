import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ym-uxxb9p.css';
import '../../css/a/aor1mmhyl.css';
import '../../css/t/tavu7dgmz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ym-uxxb9p"/><path class="aor1mmhyl"/><path class="tavu7dgmz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:umbrella-duotone"} {...others} />);
}

export default Component;
