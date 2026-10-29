import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/g/go1md04ik.css';
import '../../css/b/bxjv56brc.css';
import '../../css/k/kbr-34uax.css';
import '../../css/q/q9crmh73i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="go1md04ik wm-deco"/><path class="bxjv56brc wm-deco"/><path class="kbr-34uax"/><path class="q9crmh73i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:maximize-blueprint"} {...others} />);
}

export default Component;
