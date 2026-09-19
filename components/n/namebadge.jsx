import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zmx8ijb7m.css';
import '../../css/i/ibya-7rop.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zmx8ijb7m"/><path class="ibya-7rop"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:namebadge"} {...others} />);
}

export default Component;
