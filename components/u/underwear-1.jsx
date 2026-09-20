import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n0m548b9a.css';
import '../../css/w/wp3d08bms.css';
import '../../css/o/o_5a88bhh.css';
import '../../css/k/kna42lblu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="n0m548b9a"/><path class="wp3d08bms"/><path class="o_5a88bhh"/><path class="kna42lblu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:underwear-1"} {...others} />);
}

export default Component;
