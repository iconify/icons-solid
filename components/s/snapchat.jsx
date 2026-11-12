import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v0im_gbxt.css';
import '../../css/t/t1ca65brz.css';
import '../../css/t/tw6980btg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="v0im_gbxt"/><path class="t1ca65brz"/><path class="tw6980btg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:snapchat"} {...others} />);
}

export default Component;
