import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/w/wpyxkzbkr.css';
import '../../css/i/ij5xpgxlr.css';
import '../../css/g/goo9dshtt.css';
import '../../css/z/z8hhzrb0o.css';
import '../../css/g/gh850ugvl.css';
import '../../css/h/hd185ebjo.css';
import '../../css/n/n3mv34aei.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wm-deco wpyxkzbkr"/><path class="ij5xpgxlr wm-deco"/><path class="goo9dshtt wm-deco"/><path class="wm-k z8hhzrb0o"/><path class="gh850ugvl wm-a"/><path class="hd185ebjo wm-k"/><path class="n3mv34aei wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:scissors-blueprint"} {...others} />);
}

export default Component;
