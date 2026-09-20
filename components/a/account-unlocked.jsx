import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qm-7o-8hm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qm-7o-8hm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:account-unlocked"} {...others} />);
}

export default Component;
