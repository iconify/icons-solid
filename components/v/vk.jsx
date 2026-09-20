import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xmm02yz3c.css';
import '../../css/m/mc6ws4xxz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xmm02yz3c"/><path class="mc6ws4xxz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:vk"} {...others} />);
}

export default Component;
