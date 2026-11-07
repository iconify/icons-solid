import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ir7olpafp.css';
import '../../css/q/qfbfm5pbk.css';
import '../../css/j/jn_1-kbwn.css';
import '../../css/m/mzfoi9l1e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ir7olpafp"/><path class="qfbfm5pbk"/><path class="jn_1-kbwn"/><path clip-rule="evenodd" class="mzfoi9l1e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:download-twice-square-outline"} {...others} />);
}

export default Component;
