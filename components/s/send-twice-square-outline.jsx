import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gq6c8dbwk.css';
import '../../css/p/pfp9-dnkq.css';
import '../../css/o/o2vee8t7p.css';
import '../../css/m/mzfoi9l1e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gq6c8dbwk"/><path class="pfp9-dnkq"/><path class="o2vee8t7p"/><path clip-rule="evenodd" class="mzfoi9l1e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:send-twice-square-outline"} {...others} />);
}

export default Component;
