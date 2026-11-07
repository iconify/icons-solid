import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g5-2keb6j.css';
import '../../css/n/ngqtlcoaq.css';
import '../../css/h/hqo5-g8_n.css';
import '../../css/w/w2qhwh4_j.css';
import '../../css/u/uez9mdbud.css';
import '../../css/o/ox_n4815v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g5-2keb6j"/><path class="ngqtlcoaq"/><path class="hqo5-g8_n"/><path class="w2qhwh4_j"/><path class="uez9mdbud"/><path class="ox_n4815v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:table-properties-bold"} {...others} />);
}

export default Component;
