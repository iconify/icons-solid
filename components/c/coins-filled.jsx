import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hxbs97bbo.css';
import '../../css/v/v_sj4-bnm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hxbs97bbo"/><circle class="v_sj4-bnm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:coins-filled"} {...others} />);
}

export default Component;
