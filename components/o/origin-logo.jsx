import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/guewfbcxi.css';
import '../../css/u/uawz29b3i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="guewfbcxi"/><path class="uawz29b3i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:origin-logo"} {...others} />);
}

export default Component;
