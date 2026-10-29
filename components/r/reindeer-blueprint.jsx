import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/g/gmpq7liur.css';
import '../../css/g/g7infcc-q.css';
import '../../css/t/t218te2ox.css';
import '../../css/o/ogk9prbik.css';
import '../../css/w/womszacoh.css';
import '../../css/z/zktokqv7y.css';
import '../../css/p/p7a2_jb0n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="gmpq7liur wm-deco"/><path class="g7infcc-q wm-deco"/><path class="t218te2ox wm-deco"/><path class="ogk9prbik wm-k"/><path class="wm-a womszacoh"/><path class="wm-s zktokqv7y"/><path class="p7a2_jb0n wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:reindeer-blueprint"} {...others} />);
}

export default Component;
