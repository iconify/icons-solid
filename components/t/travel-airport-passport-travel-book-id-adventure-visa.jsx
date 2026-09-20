import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/lmrq91btd.css';
import '../../css/r/rhi_p7bme.css';
import '../../css/i/idj15fb9a.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><rect class="lmrq91btd"/><circle class="rhi_p7bme"/><path class="idj15fb9a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:travel-airport-passport-travel-book-id-adventure-visa"} {...others} />);
}

export default Component;
