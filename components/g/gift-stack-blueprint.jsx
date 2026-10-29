import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/v/vhtshccqs.css';
import '../../css/b/b04599g3z.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/j/ju1mt7bfk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="vhtshccqs wm-deco"/><path class="b04599g3z wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="ju1mt7bfk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:gift-stack-blueprint"} {...others} />);
}

export default Component;
