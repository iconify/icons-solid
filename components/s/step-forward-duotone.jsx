import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bbm58abcy.css';
import '../../css/p/p9eupo9br.css';
import '../../css/s/smehn_blx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bbm58abcy"/><path class="p9eupo9br"/><path class="smehn_blx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:step-forward-duotone"} {...others} />);
}

export default Component;
