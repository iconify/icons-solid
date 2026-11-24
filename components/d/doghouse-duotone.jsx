import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/msv92hb5b.css';
import '../../css/h/h8po8dbte.css';
import '../../css/b/bwvpembku.css';
import '../../css/s/sxt9xbc4k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="msv92hb5b"/><path class="h8po8dbte"/><path class="bwvpembku"/><path class="sxt9xbc4k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:doghouse-duotone"} {...others} />);
}

export default Component;
