import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l2vknoy1v.css';
import '../../css/n/n4y7vlbdo.css';
import '../../css/l/lvgrsl4cb.css';
import '../../css/q/qrpz-wbzi.css';
import '../../css/a/av0-tzbyc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l2vknoy1v"/><path class="n4y7vlbdo"/><circle class="lvgrsl4cb"/><path class="qrpz-wbzi"/><path class="av0-tzbyc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:stream-on"} {...others} />);
}

export default Component;
