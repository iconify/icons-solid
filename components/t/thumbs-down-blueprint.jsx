import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/m/m-enwbbfz.css';
import '../../css/n/n2ocleb-s.css';
import '../../css/f/f6_0b0b7v.css';
import '../../css/s/stmy9abca.css';
import '../../css/j/jtixgnbqs.css';
import '../../css/e/egxdvdb8r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="m-enwbbfz wm-deco"/><path class="n2ocleb-s wm-deco"/><path class="f6_0b0b7v wm-deco"/><path class="stmy9abca wm-k"/><path class="jtixgnbqs wm-a"/><path class="egxdvdb8r wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:thumbs-down-blueprint"} {...others} />);
}

export default Component;
