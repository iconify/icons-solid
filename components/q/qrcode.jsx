import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kyx5u8btq.css';
import '../../css/d/d-beombpy.css';
import '../../css/y/ygr8_mw8f.css';
import '../../css/m/myuqn2b_x.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="kyx5u8btq"/><path class="d-beombpy"/><path class="ygr8_mw8f"/><path class="myuqn2b_x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:qrcode"} {...others} />);
}

export default Component;
