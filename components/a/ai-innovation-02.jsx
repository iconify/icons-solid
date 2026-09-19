import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/roictrb7z.css';
import '../../css/m/m79z381ao.css';
import '../../css/t/tgwjvvlpl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="roictrb7z"/><path class="m79z381ao"/><path class="tgwjvvlpl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ai-innovation-02"} {...others} />);
}

export default Component;
