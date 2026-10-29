import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/c/cmj9i73hd.css';
import '../../css/n/nge5cfbll.css';
import '../../css/o/or3gi1b5y.css';
import '../../css/k/kk0fjtbcv.css';
import '../../css/w/wkhticbiw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="cmj9i73hd wm-deco"/><path class="nge5cfbll wm-deco"/><path class="or3gi1b5y wm-k"/><path class="kk0fjtbcv wm-a"/><path class="wkhticbiw wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:layout-list-blueprint"} {...others} />);
}

export default Component;
