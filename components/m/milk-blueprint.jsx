import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/g/gz61a7bkh.css';
import '../../css/r/rbzq4bjzv.css';
import '../../css/e/e8y0qijnn.css';
import '../../css/q/qmf8_bm9e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="gz61a7bkh wm-deco"/><path class="rbzq4bjzv wm-deco"/><path class="e8y0qijnn wm-k"/><path class="qmf8_bm9e wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:milk-blueprint"} {...others} />);
}

export default Component;
