import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bg5dbabsq.css';
import '../../css/y/yg1rlabfb.css';
import '../../css/h/horrpqbkz.css';
import '../../css/i/ic9a8sb7p.css';
import '../../css/z/z12rn7bqg.css';
import '../../css/t/t1wikfjik.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bg5dbabsq"/><path class="yg1rlabfb"/><path class="horrpqbkz"/><path class="ic9a8sb7p"/><path class="z12rn7bqg"/><path class="t1wikfjik"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:family-child-play-ball-warning"} {...others} />);
}

export default Component;
