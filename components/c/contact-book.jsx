import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/qu_g2rb4b.css';
import '../../css/l/lk9payb6a.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="qu_g2rb4b"/><path class="lk9payb6a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:contact-book"} {...others} />);
}

export default Component;
