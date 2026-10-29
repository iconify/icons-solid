import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/c/cvzjqtbcy.css';
import '../../css/z/z3ys52bre.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/i/is_-82b8q.css';
import '../../css/p/p4e6g2c5f.css';
import '../../css/o/o8av1-bqi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="cvzjqtbcy wm-deco"/><path class="wm-deco z3ys52bre"/><path class="cf3uzcrzx wm-deco"/><path class="is_-82b8q wm-k"/><path class="p4e6g2c5f wm-s"/><path class="o8av1-bqi wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:phone-incoming-blueprint"} {...others} />);
}

export default Component;
