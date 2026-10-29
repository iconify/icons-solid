import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/k/k74zkac6c.css';
import '../../css/r/rhnsbwb-m.css';
import '../../css/t/tvbjsxrsv.css';
import '../../css/m/mikouibnu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="k74zkac6c wm-deco"/><path class="rhnsbwb-m wm-deco"/><path class="tvbjsxrsv wm-k"/><path class="mikouibnu wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:credit-card-blueprint"} {...others} />);
}

export default Component;
