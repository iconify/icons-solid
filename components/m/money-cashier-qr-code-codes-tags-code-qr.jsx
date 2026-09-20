import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/g7z1o33yi.css';
import '../../css/y/y26arsq-q.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><rect class="g7z1o33yi"/><path class="y26arsq-q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:money-cashier-qr-code-codes-tags-code-qr"} {...others} />);
}

export default Component;
