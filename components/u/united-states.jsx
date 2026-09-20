import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uho2wkbps.css';
import '../../css/f/f4q1ngy9p.css';
import '../../css/i/igw_lbcrs.css';
import '../../css/l/l2hj_nb3x.css';
import '../../css/m/m2p93h8dr.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="uho2wkbps"/><path class="f4q1ngy9p"/><path class="igw_lbcrs"/><path class="l2hj_nb3x"/><path class="m2p93h8dr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:united-states"} {...others} />);
}

export default Component;
