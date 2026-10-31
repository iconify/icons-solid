import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/i/iv8ft6b8h.css';
import '../../css/p/p8e5embvq.css';
import '../../css/b/bwvgseb2w.css';
import '../../css/j/jp579lbrs.css';
import '../../css/a/af-bi763y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="iv8ft6b8h wm-shadow"/><path class="p8e5embvq wm-shadow"/><path class="bwvgseb2w"/><path class="jp579lbrs"/><path class="af-bi763y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:drill"} {...others} />);
}

export default Component;
