import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fcchtnb8a.css';
import '../../css/z/zze7phhsa.css';
import '../../css/e/efactgb9v.css';
import '../../css/h/hpeelft6m.css';
import '../../css/e/evn40-bwv.css';
import '../../css/d/dvn5y68qj.css';
import '../../css/q/qje86kbzn.css';
import '../../css/b/bjgtrqdfc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fcchtnb8a"/><path class="zze7phhsa"/><path class="efactgb9v"/><path class="hpeelft6m"/><path class="evn40-bwv"/><path class="dvn5y68qj"/><path class="qje86kbzn"/><path class="bjgtrqdfc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:face-scan-circle-bold-duotone"} {...others} />);
}

export default Component;
