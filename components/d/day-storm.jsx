import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tbfeluyew.css';
import '../../css/y/yl4igzk9b.css';
import '../../css/g/g5m5enmwo.css';
import '../../css/l/lpveefb1h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="tbfeluyew"/><path class="yl4igzk9b"/><path class="g5m5enmwo"/><path class="lpveefb1h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:day-storm"} {...others} />);
}

export default Component;
