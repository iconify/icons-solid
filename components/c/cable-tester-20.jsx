import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/waxqflb-o.css';
import '../../css/m/mfaduwb-f.css';
import '../../css/f/fu23s4b3q.css';
import '../../css/x/x90g5f2cs.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="waxqflb-o"/><path class="mfaduwb-f"/><path class="fu23s4b3q"/><path class="x90g5f2cs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cable-tester-20"} {...others} />);
}

export default Component;
