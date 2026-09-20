import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/i/i0c0wnfvv.css';
import '../../css/s/shi3-fcss.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="i0c0wnfvv"/><path class="shi3-fcss"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:doctrine-logo"} {...others} />);
}

export default Component;
