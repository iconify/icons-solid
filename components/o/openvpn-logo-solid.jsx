import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k8kdyub3z.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="k8kdyub3z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:openvpn-logo-solid"} {...others} />);
}

export default Component;
