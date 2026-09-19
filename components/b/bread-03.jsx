import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yz_qwb59l.css';
import '../../css/b/b8dvbqkre.css';
import '../../css/m/mpln52b5x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="yz_qwb59l"/><path class="b8dvbqkre"/><path class="mpln52b5x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bread-03"} {...others} />);
}

export default Component;
