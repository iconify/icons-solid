import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/smucccbcr.css';
import '../../css/h/hyy3alb2k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="smucccbcr"/><path class="hyy3alb2k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:formspirng-logo"} {...others} />);
}

export default Component;
