import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/mnu8m3bjj.css';
import '../../css/n/n1i3qywtd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="mnu8m3bjj"/><path class="n1i3qywtd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:plurk-logo-2"} {...others} />);
}

export default Component;
