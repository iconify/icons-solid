import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ud9660a5y.css';
import '../../css/n/nx2zbfb5m.css';
import '../../css/n/nzmariesu.css';
import '../../css/n/nbqssjb9c.css';
import '../../css/s/s4cdm1nek.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ud9660a5y"/><path class="nx2zbfb5m"/><path class="nzmariesu"/><path class="nbqssjb9c"/><path class="s4cdm1nek"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:radar-duotone"} {...others} />);
}

export default Component;
