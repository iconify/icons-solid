import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d1r11cbpw.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="d1r11cbpw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:proxmox-logo-block"} {...others} />);
}

export default Component;
