import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vzpnafokc.css';
import '../../css/s/sb1oe8_aw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="vzpnafokc"/><path class="sb1oe8_aw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:logo-whatsapp-20"} {...others} />);
}

export default Component;
