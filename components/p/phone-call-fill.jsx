import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/td9l-etip.css';
import '../../css/x/xatcsgbad.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="td9l-etip"/><path class="xatcsgbad"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:phone-call-fill"} {...others} />);
}

export default Component;
